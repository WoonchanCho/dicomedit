import debug from 'debug';
import fetch from 'isomorphic-unfetch';
import { TagLiteral } from '.';

import { APP_NAME } from './Common/Constant';
import { getHashUID } from './Util';
import { IllegalArgumentsError } from './Error';
import { Element } from './Rule';

const log = debug(`${APP_NAME}:Expression`);

export const EXPRESSION_FUNCTIONS = {
  concatenate: 'concatenate',
  format: 'format',
  getURL: 'getURL',
  hashUID: 'hashUID',
  ismatch: 'ismatch',
  lookup: 'lookup',
  lowercase: 'lowercase',
  mapReferencedUIDs: 'mapReferencedUIDs',
  match: 'match',
  newUID: 'newUID',
  replace: 'replace',
  retainPrivateTags: 'retainPrivateTags',
  set: 'set',
  shiftDateByIncrement: 'shiftDateByIncrement',
  shiftDateTimeByIncrement: 'shiftDateTimeByIncrement',
  shiftDateTimeSequenceByIncrement: 'shiftDateTimeSequenceByIncrement',
  substring: 'substring',
  uppercase: 'uppercase',
  removeAllPrivateTags: 'removeAllPrivateTags',
  echo: 'echo',
  describe: 'describe',
};

export class Expression {
  constructor(funcName, ...args) {
    this.funcName = funcName;
    this.args = args;
  }

  static fromObject(raw) {
    if (!raw) {
      return undefined;
    }

    return new Expression(
      raw.funcName,
      ...raw.args.map((arg) => {
        if (arg.type) {
          return Element.fromObject(arg);
        } else if (arg.funcName) {
          return Expression.fromObject(arg);
        } else {
          return arg;
        }
      })
    );
  }

  async evaluate(dicomEdit) {
    const { funcName, args } = this;
    if (!EXPRESSION_FUNCTIONS[funcName] || !this[funcName]) {
      throw new IllegalArgumentsError(
        `the function ${funcName} is not supported`
      );
    }

    const argsPromises = args.map(async (arg) => {
      if (arg instanceof Expression) {
        return arg.evaluate(dicomEdit);
      } else if (arg instanceof Element) {
        return dicomEdit.resolveElementValue(arg);
      } else {
        return arg;
      }
    });

    return this[funcName].call(
      this,
      dicomEdit,
      ...(await Promise.all(argsPromises))
    );
  }

  concatenate(dicomEdit, ...args) {
    log('Running concatenate');
    return args.join('');
  }

  format(dicomEdit, formatString, ...formatArgs) {
    // if (args.length === 1 && args[0] !== null && typeof args[0] === 'object') {
    //   args = args[0];
    // }
    return formatString.replace(/{([^}]*)}/g, function (match, key) {
      return typeof formatArgs[key] !== 'undefined'
        ? formatArgs[key]
        : 'undefined';
    });
  }

  async getURL(dicomEdit, url, key = undefined) {
    // const key = args.length > 1 ? args[1] : undefined;
    const response = await fetch(url);
    const json = await response.json();
    return key ? json[key] : json;
  }

  hashUID(dicomEdit, arg) {
    log('Running hashUID');
    return getHashUID(arg);
  }

  ismatch(dicomEdit, value, pattern) {
    log('Running ismatch');
    const regex = new RegExp(pattern);
    return regex.test(value);
  }

  replace(dicomEdit, arg, target, replacement) {
    log('Running replace');
    const str = Array.isArray(arg) ? arg.join('') : arg;
    return str.replace(new RegExp(target, 'g'), replacement);
  }

  lowercase(dicomEdit, arg) {
    log('Running lowercase');
    return arg.toLowerCase();
  }

  substring(dicomEdit, arg, beg, end) {
    log('Running substring');
    const str = Array.isArray(arg) ? arg.join('') : arg;
    return str.substring(beg, end);
  }

  set(dicomEdit, tagName, value) {
    log('Running set');
    dicomEdit._setTag(dicomEdit.outputDict, tagName, value);
  }

  shiftDateByIncrement(dicomEdit, arg, days) {
    log('Running shiftDateByIncrement');
    const dateString = Array.isArray(arg) ? arg[0] : arg;
    const dt = new Date(
      `${dateString.substring(0, 4)}-${dateString.substring(
        4,
        6
      )}-${dateString.substring(6, 8)}`
    );
    dt.setDate(dt.getDate() + parseInt(days));
    return dt.toISOString().substring(0, 10).replace(/-/g, '');
  }

  // eslint-disable-next-line no-unused-vars
  shiftDateTimeByIncrement(dicomEdit, arg, days) {
    log('Running shiftDateTimeByIncrement');
  }

  // eslint-disable-next-line no-unused-vars
  shiftDateTimeSequenceByIncrement(dicomEdit, second, tagPath) {
    log('shiftDateTimeSequenceByIncrement');
  }

  uppercase(dicomEdit, arg) {
    log('Running uppercase');
    return arg.toUpperCase();
  }

  removeAllPrivateTags(dicomEdit) {
    log('Removing all the private tags');

    const { privateTagMap } = dicomEdit;
    Object.keys(privateTagMap).forEach((tagName) => {
      const privateHeaderTag = privateTagMap[tagName];
      const memberTagNames = dicomEdit.getMembersTagNamesOf(privateHeaderTag);
      memberTagNames.forEach((memberTagName) => {
        dicomEdit.deleteTag(dicomEdit.outputDict, memberTagName);
      });
      //dicomEdit.deleteTag(dicomEdit.outputDict, privateHeaderTag.rawTagName);
    });
  }

  echo(dicomEdit, ...args) {
    log('Echoing');
    console.log(args.join(' '));
  }

  lookup(dicomEdit, key1, key2) {
    const key = `${key1}/${key2}`;
    log(`Looking up the key ${key} in the lookup table`);
    const { lookupMap } = dicomEdit;
    const val = lookupMap[key];
    return val ? val : null;
  }

  retainPrivateTags(dicomEdit, ...args) {
    log('Retaining private tags');
    const { privateTagMap, outputDict } = dicomEdit;
    const regExps = args
      .map((privateTag) => {
        try {
          return new TagLiteral(privateTag).getRegExp(privateTagMap);
        } catch (err) {
          return undefined;
        }
      })
      .filter((privateTag) => privateTag);

    const root = outputDict.dict;
    Object.keys(root).forEach((tagName) => {
      if (!TagLiteral.isPrivateTagMember(tagName)) {
        return;
      }
      if (!regExps.find((regExp) => regExp.test(tagName))) {
        delete root[tagName];
      }
    });
  }

  // eslint-disable-next-line no-unused-vars
  describe(dicomEdit, ...args) {
    log('Skipping describe - not implemented yet');
  }
}
