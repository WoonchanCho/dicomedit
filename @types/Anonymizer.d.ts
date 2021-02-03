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
    constructor(scriptOrRuleGroup: string | RuleGroup | string[], options?: {
        identifiers: any;
        lookupMap: any;
        inputBuffer: ArrayBuffer | Buffer;
        namespaceforHashUID: string;
        parserLibrary: string;
        trace: boolean;
    });
    initialIdentifiers: any;
    lookupMap: any;
    ruleGroup: RuleGroup | RuleGroup[];
    namespaceforHashUID: string;
    parserLibrary: string;
    /**
     * Initializes output properties. This doesn't need to explicitily be called.
     * @returns {undefined}
     */
    _initializeOutput(): undefined;
    outputDict: any;
    ruleResult: RuleResult;
    identifiers: any;
    /**
     * Loads a DICOM object from the input buffer.
     * @param {ArrayBuffer|Uint8Array} inputBuffer - InputBuffer should be a type of ArrayBuffer or Uinit8Array. (The Buffer type on Node.js is allowed because it extends Uint8Array)
     * @param {Object} [options={ignoreErrors: true}] - Specifies options to be used while loading a DICOM object
     * @param {boolean} options.ignoreErrors - True if you want to disregard errors that happens inside dcmjs library while loading a DICOM object.
     */
    loadDcm(inputBuffer: ArrayBuffer | Uint8Array, options?: {
        ignoreErrors: boolean;
    }): void;
    loadFromDicomDict(dicomDict: any): void;
    inputDict: any;
    cleanseAfterloading(): void;
    loadDcmUsingFileName(filename: any): void;
    constructPrivateTagMap(): void;
    privateTagMap: {};
    /**
     * Anonymize the loaded DICOM object by applying the rules provided when the object is created.
     */
    applyRules(): Promise<void>;
    _applyRules(ruleGroup: any): Promise<void>;
    applyRule(rule: any): Promise<void>;
    resolveElementValue(element: any): Promise<any>;
    _checkCondition(condition: any): Promise<boolean>;
    runStatement(statement: any): Promise<void>;
    _runAssignStatement(statement: any): Promise<void>;
    _runDeleteStatement(statement: any): void;
    _runProcedureStatement(statement: any): Promise<void>;
    _getParentTags(dicomDict: any, tagPathTokens: any, runsIfExists: any): any[];
    _getTagsWithPath(dicomDict: any, tagPathTokens: any): any[];
    _setTag(dicomDict: any, tagPath: any, values: any, vr: any, runsIfExists: any): void;
    resolveTagName(tagName: any): any;
    getChildTagNumbers(parent?: any): number[];
    _deleteTag(parents: any, tagTokens: any): void;
    deleteTag(dicomDict: any, tagPath: any): void;
    write(): any;
    matchKeys(tagLiteral: any, parent?: any): string[];
    getMembersTagNamesOf(privateHeaderTag: any): string[];
}
import { RuleGroup } from ".";
import { RuleResult } from "./RuleResult";
