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
    constructor(inputBuffer?: ArrayBuffer | Buffer);
    inputBuffer: ArrayBuffer | Buffer;
    /**
     * Loads a DICOM object from the input buffer.
     * @param {ArrayBuffer|Uint8Array} inputBuffer - InputBuffer should be a type of ArrayBuffer or Uinit8Array. (The Buffer type on Node.js is allowed because it extends Uint8Array)
     * @param {Object} [options={ignoreErrors: true}] - Specifies options to be used while loading a DICOM object
     * @param {boolean} options.ignoreErrors - True if you want to disregard errors that happens inside dcmjs library while loading a DICOM object.
     */
    loadDcm(inputBuffer: ArrayBuffer | Uint8Array, options?: {
        ignoreErrors: boolean;
    }): void;
    rawJson: any;
    cleanseAfterloading(): void;
    loadDcmUsingFileName(filename: any): void;
    constructPrivateTagMap(): void;
    privateTagMap: {};
    anonymize(scriptOrRuleGroup: any, options?: {
        identifiers: {};
        lookupMap: {};
        namespaceforHashUID: string;
        parserLibrary: string;
        trace: boolean;
    }): Promise<void>;
    setTag(tagName: any, vr: any, values: any): void;
    deleteTag(tagName: any): void;
}
