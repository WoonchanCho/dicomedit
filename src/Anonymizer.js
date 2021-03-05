import dcmjs from 'dcmjs';
import debug from 'debug';
import fs from 'fs';

import { RuleGroup, Parser } from '.';
import {
  APP_NAME,
  RULE_RESULT_STATUSES,
  TAG_TYPES,
  DEFAULT_PARSER_LIBRARY,
} from './Common/Constant';
import {
  //   cloneDeep,
  arraysEqual,
  tokenizeTagPath,
  validateIdentifierConvention,
  getDefaultVr,
} from './Util';
import {
  IllegalArgumentsError,
  NotFoundError,
  RuleError,
  EnvironmentError,
  DicomWriteError,
} from './Error';
import { CONDITION_TYPES, ELEMENT_TYPES, STATEMENT_TYPES } from './Rule';
import { Expression } from './Expression';
import { RuleResult } from './RuleResult';
import TagLiteral from './TagLiteral';

const log = debug(`${APP_NAME}:Anonymizer`);
const { DicomMessage, DicomDict, PixelModifier } = dcmjs.data;

/**
 * Main Class for the DICOM anonymization work
 */
export default class Anonymizer {
  /**
   *
   * Creates a Anonymizer object.
   * @param {string|RuleGroup|string[]} scriptOrRuleGroup - script or ruleGroup object
   * @param {Object} [options] - options
   * @param {Object} [options.identifiers] - Initial identifiers
   * @param {Object} [options.lookupMap] - Lookup Map object
   * @param {ArrayBuffer|Buffer}  [options.inputBuffer] - Once inputBuffer provided, loads the image buffer during the object construction.
   * @param {string} [options.namespaceforHashUID] - namespace used when producing uuid v5 value in the hashUID function
   * @param {string} [options.parserLibrary] - parser library to use (ANTLR4 or PEGJS)
   * @param {boolean} [options.trace] - whether to trace when producing parser when using PEG.js
   */
  constructor(
    scriptOrRuleGroup,
    options = {
      identifiers: {},
      lookupMap: {},
      inputBuffer: undefined,
      namespaceforHashUID: '',
      parserLibrary: DEFAULT_PARSER_LIBRARY,
      trace: false,
    }
  ) {
    const { identifiers, lookupMap, inputBuffer, trace, parserLibrary } = options;
    // Validate script or ruleGroup
    if (!scriptOrRuleGroup) {
      throw new IllegalArgumentsError('DicomEdit script or the rule group definition is required');
    }
    if (
      typeof scriptOrRuleGroup !== 'string' &&
      !(scriptOrRuleGroup instanceof RuleGroup) &&
      !Array.isArray(scriptOrRuleGroup)
    ) {
      throw new IllegalArgumentsError('DicomEdit script or the rule group definition is required');
    }

    // Validate Identifiers
    if (identifiers && typeof identifiers !== 'object') {
      throw new IllegalArgumentsError('identifiers should be a type of object');
    }

    this.initialIdentifiers = identifiers || {};
    Object.keys(this.initialIdentifiers).forEach((identifier) => {
      if (!validateIdentifierConvention(identifier)) {
        throw new IllegalArgumentsError(`identifier name is not valid: ${identifier}`);
      }
    });

    // Validate lookupMap
    if (lookupMap && typeof lookupMap !== 'object') {
      throw new IllegalArgumentsError('lookupMap should be a type of object');
    }

    this.lookupMap = lookupMap || {};

    if (typeof scriptOrRuleGroup === 'string') {
      this.ruleGroup = Parser.parse(scriptOrRuleGroup, {
        trace,
        parserLibrary,
      });
    } else if (scriptOrRuleGroup instanceof RuleGroup) {
      this.ruleGroup = scriptOrRuleGroup;
    } else {
      this.ruleGroup = scriptOrRuleGroup.map((script) =>
        Parser.parse(script, { trace, parserLibrary })
      );
    }

    if (inputBuffer) {
      this.loadDcm(inputBuffer);
    }
    this.namespaceforHashUID =
      options && options.namespaceforHashUID ? options.namespaceforHashUID : '';
    this.parserLibrary = parserLibrary;
  }

  /**
   * Initializes output properties. This doesn't need to explicitily be called.
   * @returns {undefined}
   */
  _initializeOutput() {
    log('Initializing output properties');
    this.outputDict = undefined;
    this.ruleResult = new RuleResult();
    this.identifiers = this.initialIdentifiers;
  }

  /**
   * Loads a DICOM object from the input buffer.
   * @param {ArrayBuffer|Uint8Array} inputBuffer - InputBuffer should be a type of ArrayBuffer or Uinit8Array. (The Buffer type on Node.js is allowed because it extends Uint8Array)
   * @param {Object} [options={ignoreErrors: true}] - Specifies options to be used while loading a DICOM object
   * @param {boolean} options.ignoreErrors - True if you want to disregard errors that happens inside dcmjs library while loading a DICOM object.
   */
  loadDcm(inputBuffer, options = { ignoreErrors: true }) {
    if (!(inputBuffer instanceof ArrayBuffer) && !(inputBuffer instanceof Uint8Array)) {
      throw new IllegalArgumentsError(
        'InputBuffer should be a type of ArrayBuffer (or Buffer on Node.JS)'
      );
    }
    log(`Loading a DICOM object from the ${inputBuffer.byteLength} byte buffer`);
    const dicomDict = DicomMessage.readFile(
      inputBuffer instanceof Uint8Array ? inputBuffer.buffer : inputBuffer,
      options
    );
    this.loadFromDicomDict(dicomDict);
  }

  loadFromDicomDict(dicomDict) {
    this.inputDict = dicomDict;
    this.cleanseAfterloading();
    this.constructPrivateTagMap();
  }

  cleanseAfterloading() {
    // According to the DICOM standard, Values with VRs constructed of character strings, except in the case of the VR UI, shall be padded with SPACE characters (20H, in the Default Character Repertoire) when necessary to achieve even length.
    // However, some DICOM has NULL(00H) characters for this purpose.
    // Manually remove the trailing 00H
    const { dict = {} } = this.inputDict;
    Object.keys(dict).forEach((tagName) => {
      const tag = dict[tagName];
      if (tag.vr === 'CS' || tag.vr === 'TM') {
        let vals = tag.Value;
        if (vals) {
          vals = Array.isArray(vals) ? vals : [vals];
          let len = vals.length;
          if (len && vals[len - 1] && /\0+$/.test(vals[len - 1])) {
            vals[len - 1] = vals[len - 1].replace(/\0+$/, '');
          }
        }
      }
    });
  }

  loadDcmUsingFileName(filename) {
    if (!fs) {
      throw new EnvironmentError('This function is supported only on the Node.JS environment');
    }
    const arrayBuffer = fs.readFileSync(filename);
    this.loadDcm(arrayBuffer);
  }

  constructPrivateTagMap() {
    log('Constructing Private Tag Map');
    const privateTagMap = {};
    const { dict } = this.inputDict;
    Object.keys(dict).forEach((tagName) => {
      const tag = dict[tagName];
      if (TagLiteral.isPrivateTagHeader(tagName) && Array.isArray(tag.Value) && tag.Value.length) {
        const key = tag.Value[0].trim();
        privateTagMap[key] = new TagLiteral(tagName);
      }
    });
    this.privateTagMap = privateTagMap;
  }

  /**
   * Anonymize the loaded DICOM object by applying the rules provided when the object is created.
   */
  async applyRules() {
    if (!(this.inputDict instanceof DicomDict)) {
      throw new IllegalArgumentsError('Please load dcm buffer before applying rules');
    }
    this._initializeOutput();

    // Performs a deep cloning of the input DICOM object.
    // this.outputDict = cloneDeep(this.inputDict);
    this.outputDict = this.inputDict;

    if (Array.isArray(this.ruleGroup)) {
      for (let i = 0; i < this.ruleGroup.length; ++i) {
        await this._applyRules(this.ruleGroup[i]);
      }
    } else {
      await this._applyRules(this.ruleGroup);
    }
  }

  async _applyRules(ruleGroup) {
    const { ruleResult } = this;
    const { rules = {} } = ruleGroup;

    // Applies anonymization rules sequentially in order.
    for (let i = 0; i < rules.length; ++i) {
      const rule = rules[i];
      try {
        if (!rule.used) {
          throw new RuleError('This rule is skipped');
        }
        await this.applyRule(rule);
        ruleResult.addResult(i, rule, RULE_RESULT_STATUSES.COMPLETED);
      } catch (err) {
        if (err instanceof RuleError && err.severiry !== RULE_RESULT_STATUSES.FATAL) {
          ruleResult.addResult(i, rule, err.severiry, err);
        } else {
          throw err;
        }
      }
    }
  }

  async applyRule(rule) {
    const { statement, condition, elseStatement } = rule;
    if (await this._checkCondition(condition)) {
      await this.runStatement(statement);
    } else if (elseStatement) {
      await this.runStatement(elseStatement);
    }
  }

  async resolveElementValue(element) {
    const { outputDict, identifiers } = this;
    let values;
    let tags;
    switch (element.type) {
      case ELEMENT_TYPES.TAG:
        tags = this._getTagsWithPath(outputDict, element.value);
        if (tags && tags.length) {
          let idx = 0;
          if (element.options && element.options.idx !== undefined) {
            idx = element.options.idx;
          }
          values = tags[idx].Value;
          if (values && values.length === 1) {
            values = values[0];
          }
        }
        break;

      case ELEMENT_TYPES.IDENTIFIER:
        if (!identifiers[element.value]) {
          throw new RuleError(
            `The identifier ${element.value} is not declared`,
            RULE_RESULT_STATUSES.ERROR
          );
        }
        values = identifiers[element.value];
        break;

      case ELEMENT_TYPES.LITERAL:
        // values = Array.isArray(element.value) ? element.value : [element.value];
        values = element.value;
        break;

      case ELEMENT_TYPES.EXPRESSION:
        if (!(element.value instanceof Expression)) {
          values = element.value;
        } else {
          values = await element.value.evaluate(this);
        }
        break;

      default:
        throw new IllegalArgumentsError(`The element type is not valid: ${element.type}`);
    }
    return values;
  }

  async _checkCondition(condition) {
    if (!condition) {
      return true;
    }
    const { operator, operand1, operand2 } = condition;
    const value1 = await this.resolveElementValue(operand1);
    const value2 = await this.resolveElementValue(operand2);
    let regex;
    switch (operator) {
      case CONDITION_TYPES.EQUAL:
        return arraysEqual(value1, value2);

      case CONDITION_TYPES.NOT_EQUAL:
        return !arraysEqual(value1, value2);

      case CONDITION_TYPES.MATCH:
        regex = new RegExp(value2);
        return regex.test(value1);

      case CONDITION_TYPES.NOT_MATCH:
        regex = new RegExp(value2);
        return !regex.test(value1);
    }

    throw new RuleError(
      `the operator in the condition is not valid: ${operator}`,
      RULE_RESULT_STATUSES.ERROR
    );
  }

  async runStatement(statement) {
    const { type } = statement;

    switch (type) {
      case STATEMENT_TYPES.ASSIGN:
        await this._runAssignStatement(statement);
        break;

      case STATEMENT_TYPES.DELETE:
        await this._runDeleteStatement(statement);
        break;

      case STATEMENT_TYPES.PROCEDURE:
        await this._runProcedureStatement(statement);
        break;

      default:
        throw new RuleError(`the statement type is not valid: ${type}`, RULE_RESULT_STATUSES.ERROR);
    }
  }

  async _runAssignStatement(statement) {
    log('Running ASSIGNMENT statement');
    const { outputDict, identifiers } = this;
    const { operand1, operand2, options } = statement;

    // The left operand of the ASSIGN Statement should be an Element object of a type of either TAG or IDENTIFIER.
    if (operand1.type !== ELEMENT_TYPES.TAG && operand1.type !== ELEMENT_TYPES.IDENTIFIER) {
      throw new RuleError(
        'The left operand of the ASSIGN Statement should be an Element object of a type of either TAG or IDENTIFIER.',
        RULE_RESULT_STATUSES.ERROR
      );
    }

    let values;
    try {
      values = await this.resolveElementValue(operand2);
    } catch (err) {
      console.log(err);
      throw new RuleError(err.message, RULE_RESULT_STATUSES.ERROR);
    }

    if (operand1.type === ELEMENT_TYPES.TAG) {
      this._setTag(outputDict, operand1.value, values, undefined, options.runsIfExists);
    } else if (operand1.type === ELEMENT_TYPES.IDENTIFIER) {
      if (!validateIdentifierConvention(operand1.value)) {
        throw new RuleError(`Identifier name is not valid: ${operand1.value}`);
      }
      identifiers[operand1.value] = values;
    }
  }

  _runDeleteStatement(statement) {
    log('Running DELETE statement');
    const { outputDict, identifiers } = this;
    const { operand1 } = statement;

    if (operand1.type !== ELEMENT_TYPES.TAG && operand1.type !== ELEMENT_TYPES.IDENTIFIER) {
      throw new RuleError(
        'the left operand of the delete statement should be the type of either tag or identifier.',
        RULE_RESULT_STATUSES.ERROR
      );
    }

    switch (operand1.type) {
      case ELEMENT_TYPES.TAG:
        this.deleteTag(outputDict, operand1.value);
        break;

      case ELEMENT_TYPES.IDENTIFIER:
        delete identifiers[operand1.value];
        break;

      default:
        throw new RuleError(
          `the type of the left operand is invalid: ${operand1.type}`,
          RULE_RESULT_STATUSES.ERROR
        );
    }
  }

  async _runProcedureStatement(statement) {
    log('Running Procedure statement');
    const { operand1 } = statement;

    if (operand1.type !== ELEMENT_TYPES.EXPRESSION) {
      throw new RuleError(
        `the type of the operand should be EXPRESSION: ${operand1.type}`,
        RULE_RESULT_STATUSES.ERROR
      );
    }

    await operand1.value.evaluate(this);
  }

  _getParentTags(dicomDict, tagPathTokens, runsIfExists) {
    log(`Retrieving parent tags of ${tagPathTokens}`);
    tagPathTokens =
      typeof tagPathTokens === 'string' ? tokenizeTagPath(tagPathTokens) : tagPathTokens;
    let nodes = [dicomDict.dict];
    for (let i = 0; i < tagPathTokens.length; ++i) {
      const token = tagPathTokens[i];

      const candidates = nodes.filter((node) => node[token]);

      if (i === tagPathTokens.length - 1) {
        return runsIfExists === true ? candidates : nodes;
      }
      // nodes = candidates.map((node) => node[token].Value[0]);
      nodes = [];
      candidates.forEach((node) => {
        node[token].Value.forEach((val) => nodes.push(val));
      });
    }
    return [];
  }

  _getTagsWithPath(dicomDict, tagPathTokens) {
    tagPathTokens =
      typeof tagPathTokens === 'string' ? tokenizeTagPath(tagPathTokens) : tagPathTokens;
    let nodes = [dicomDict.dict];

    for (let i = 0; i < tagPathTokens.length; ++i) {
      const token = tagPathTokens[i];

      const candidates = nodes.filter((node) => node[token] && typeof node[token] === 'object');
      if (candidates.length === 0) {
        break;
      }
      if (i === tagPathTokens.length - 1) {
        return candidates.map((node) => node[token]);
      }
      nodes = [];
      candidates.forEach((node) => {
        node[token].Value.forEach((val) => nodes.push(val));
      });
    }
    return undefined;
  }

  _setTag(dicomDict, tagPath, values, vr, runsIfExists) {
    log(`Setting ${values} to ${tagPath}`);
    const tokens = tokenizeTagPath(tagPath);
    const parents = this._getParentTags(dicomDict, tokens, runsIfExists);

    if (parents.length === 0) {
      log(`Skipping assingment statement for ${tagPath}`);
    } else {
      parents.forEach((parent) => {
        parent[tokens[tokens.length - 1]] = {
          vr: vr || getDefaultVr(tokens[tokens.length - 1]),
          Value: values,
        };
      });
    }
  }

  resolveTagName(tagName) {
    let resolvedToken = tagName;
    if (TagLiteral.isPrivateTagMember(tagName)) {
      const tagLiteral = new TagLiteral(tagName);
      resolvedToken = tagLiteral.toNumberString(this.privateTagMap);
    }
    return resolvedToken;
  }

  getChildTagNumbers(parent = undefined) {
    parent = parent || this.outputDict.dict;
    return Object.keys(parent)
      .map((key) => parseInt(key, 16))
      .sort((a, b) => a - b);
  }

  _deleteTag(parents, tagTokens) {
    if (!tagTokens || tagTokens.length === 0) {
      return;
    }
    const token = tagTokens.splice(0, 1)[0];
    const tagLiteral = new TagLiteral(token);
    parents.forEach((parent) => {
      const keys = this.matchKeys(tagLiteral, parent);
      keys.forEach((key) => {
        if (tagTokens.length === 0) {
          delete parent[key];
        } else {
          const elem = parent[key];
          if (elem.vr === 'SQ' && Array.isArray(elem.Value)) {
            this._deleteTag(elem.Value, tagTokens);
          }
        }
      });
    });
  }

  deleteTag(dicomDict, tagPath) {
    log(`Deleting tags for ${tagPath}`);
    this._deleteTag([dicomDict.dict], tokenizeTagPath(tagPath));
  }

  write(options = { strict: false }) {
    if (!this.outputDict) {
      throw new NotFoundError('There is no output to write');
    }
    const { strict = false } = options;
    try {
      return this.outputDict.write({ allowInvalidVRLength: !strict });
    } catch (err) {
      throw new DicomWriteError(err.message, err);
    }
  }

  matchKeys(tagLiteral, parent = undefined) {
    parent = parent || this.outputDict.dict;
    const criteria = tagLiteral.getRegExp(this.privateTagMap);
    return Object.keys(parent).filter((tagName) => criteria.test(tagName));
    //   .map((tagName) => parent[tagName]);
  }

  getMembersTagNamesOf(privateHeaderTag) {
    if (privateHeaderTag.type !== TAG_TYPES.PRIVATE_HEADER) {
      return [];
    }
    const tagName = `${privateHeaderTag.group}${privateHeaderTag.headerNo}XX`;
    return this.matchKeys(new TagLiteral(tagName));
  }

  draw(shape, shapeParams) {
    if (shape !== 'rectangle') {
      throw new RuleError(`${shape} is not a supported shape.`);
    }
    const { l: left, t: top, r: right, b: bottom } = this.parseShapeParams(shapeParams);
    const pixelModifier = new PixelModifier(this.outputDict);
    pixelModifier.draw(shape, { left, top, right, bottom });
  }

  parseShapeParams(shapeParams) {
    // shapeParams : l=100, t=100, r=200, b=200
    const obj = {};
    shapeParams
      .split(',')
      .map((token) => token.trim())
      .filter((token) => !!token)
      .forEach((item) => {
        const pair = item.split('=').map((token) => token.trim());
        if (pair.length !== 2) {
          return;
        }
        obj[pair[0]] = parseInt(pair[1]);
      });
    return obj;
  }
}
