export default class TagLiteral {
    static isPrivateTagHeader(tagName: any): boolean;
    static isPrivateTagMember(tagName: any): boolean;
    static toHexString(tagNumber: any): any;
    constructor(tagName: any);
    preprocess(tagName: any): any;
    group: any;
    rawTagName: any;
    type: string;
    headerNo: any;
    groupName: string;
    elementNo: string;
    element: any;
    hasWildcard(): boolean;
    getRegExp(privateTagMap?: any): RegExp;
}
