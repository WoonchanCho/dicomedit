import dcmjs from 'dcmjs';
import debug from 'debug';
import fs from 'fs';

import { Anonymizer } from '.';
import { APP_NAME, DEFAULT_PARSER_LIBRARY } from './Common/Constant';

import { IllegalArgumentsError, EnvironmentError } from './Error';
import TagLiteral from './TagLiteral';

const log = debug(`${APP_NAME}:Modifier`);
const { DicomMessage, PixelModifier } = dcmjs.data;

/**
 * DICOM Modifier Class
 *
 * @class Modifier
 * @classdesc DICOM Modifier Class
 */
export default class Modifier {
  /**
   *
   * Creates a Modifier object.
   * @param {ArrayBuffer|Buffer}  [inputBuffer] - Once inputBuffer provided, loads the image buffer during the object construction.
   */
  constructor(inputBuffer) {
    if (inputBuffer) {
      this.inputBuffer = inputBuffer;
      this.loadDcm(inputBuffer);
    }
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
    this.rawJson = DicomMessage.readFile(
      inputBuffer instanceof Uint8Array ? inputBuffer.buffer : inputBuffer,
      options
    );
    this.cleanseAfterloading();
    this.constructPrivateTagMap();
  }

  cleanseAfterloading() {
    // According to the DICOM standard, Values with VRs constructed of character strings, except in the case of the VR UI, shall be padded with SPACE characters (20H, in the Default Character Repertoire) when necessary to achieve even length.
    // However, some DICOM has NULL(00H) characters for this purpose.
    // Manually remove the trailing 00H
    const { dict = {} } = this.rawJson;
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
    const { dict } = this.rawJson;
    Object.keys(dict).forEach((tagName) => {
      const tag = dict[tagName];
      if (TagLiteral.isPrivateTagHeader(tagName) && Array.isArray(tag.Value) && tag.Value.length) {
        const key = tag.Value[0].trim();
        privateTagMap[key] = new TagLiteral(tagName);
      }
    });
    this.privateTagMap = privateTagMap;
  }

  async anonymize(
    scriptOrRuleGroup,
    options = {
      identifiers: {},
      lookupMap: {},
      namespaceforHashUID: '',
      parserLibrary: DEFAULT_PARSER_LIBRARY,
      trace: false,
    }
  ) {
    const anonymizer = new Anonymizer(scriptOrRuleGroup, options);
    anonymizer.loadFromDicomDict(this.rawJson);
    await anonymizer.applyRules();
    this.rawJson = anonymizer.outputDict;
  }

  setTag(tagName, vr, values) {
    let Value = undefined;
    if (values) {
      Value = Array.isArray(values) ? values : [values];
    }
    this.rawJson.dict[tagName] = { vr, Value };
  }

  deleteTag(tagName) {
    if (this.rawJson.dict[tagName]) {
      delete this.rawJson.dict[tagName];
    }
  }

  drawRectangle({ left, top, right, bottom }) {
    const pixelModifier = new PixelModifier(this.rawJson);
    pixelModifier.draw('rectangle', {
      left,
      top,
      right,
      bottom,
    });
  }
}
