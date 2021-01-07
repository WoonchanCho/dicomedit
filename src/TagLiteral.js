import { TAG_TYPES } from './Common/Constant';
import { IllegalArgumentsError } from './Error';
const WILDCARD_REGEX = /[x@#]/i;
const PRIVATE_TAG_MEMBER_REGEX = /^([0-9a-f]{4}){(.+)}([0-9a-fx@#]{2})$/i;
export default class TagLiteral {
  static isPrivateTagHeader(tagName) {
    const group = parseInt(tagName.substring(0, 4), 16);
    const element = parseInt(tagName.substring(4), 16);
    return group % 2 === 1 && element < 0x100 && element > 0x00;
  }

  static isPrivateTagMember(tagName) {
    const group = parseInt(tagName.substring(0, 4), 16);
    return (
      group % 2 == 1 &&
      (PRIVATE_TAG_MEMBER_REGEX.test(tagName) ||
        parseInt(tagName.substring(4), 16) >= 0x100)
    );
  }

  static toHexString(tagNumber) {
    return tagNumber.toString(16).padStart(8, '0');
  }

  preprocess(tagName) {
    // Take out parenthis and comma if exists
    const regex = /^\(([0-9]{4}),?(.+)\)$/.exec(tagName);
    return regex ? `${regex[1]}${regex[2]}` : tagName;
  }

  constructor(tagName) {
    tagName = this.preprocess(tagName);
    this.group = tagName.substring(0, 4);
    this.rawTagName = tagName;
    if (TagLiteral.isPrivateTagHeader(tagName)) {
      this.type = TAG_TYPES.PRIVATE_HEADER;
      this.headerNo = tagName.substring(6);
    } else if (TagLiteral.isPrivateTagMember(tagName)) {
      this.type = TAG_TYPES.PRIVATE_MEMBER;
      const reg = PRIVATE_TAG_MEMBER_REGEX.exec(tagName);
      this.groupName = reg[2];
      this.elementNo = reg[3];
    } else {
      this.type = TAG_TYPES.PUBLIC;
      this.element = tagName.substring(5);
    }
  }

  hasWildcard() {
    switch (this.type) {
      case TAG_TYPES.PRIVATE_HEADER:
        return (
          WILDCARD_REGEX.test(this.group) || WILDCARD_REGEX.test(this.headerNo)
        );
      case TAG_TYPES.PRIVATE_MEMBER:
        return (
          WILDCARD_REGEX.test(this.group) || WILDCARD_REGEX.test(this.elementNo)
        );
      case TAG_TYPES.PUBLIC:
        return (
          WILDCARD_REGEX.test(this.group) || WILDCARD_REGEX.test(this.element)
        );
    }
  }

  getRegExp(privateTagMap = undefined) {
    let str = this.rawTagName;
    if (this.type === TAG_TYPES.PRIVATE_MEMBER) {
      if (!privateTagMap) {
        throw new IllegalArgumentsError(
          'privateTagMap is required to resolve a private member tag'
        );
      }
      const privateTagHeader = privateTagMap[this.groupName];
      if (!privateTagHeader) {
        throw new IllegalArgumentsError(
          `The Private Creator ${this.groupName} is not found`
        );
      }
      str = `${this.group}${privateTagHeader.headerNo}${this.elementNo}`;
    }

    let regex = '';
    if (this.hasWildcard()) {
      for (let i = 0; i < str.length; ++i) {
        const ch = str[i];
        if (ch === 'x' || ch === 'X') {
          regex += '[0-9a-f]';
        } else if (ch === '#') {
          regex += '[13579bdf]';
        } else if (ch === '@') {
          regex += '[02468ace]';
        } else {
          regex += ch;
        }
      }
    } else {
      regex = str;
    }
    return new RegExp(regex, 'i');
  }
}
