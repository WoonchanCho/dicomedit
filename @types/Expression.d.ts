export namespace EXPRESSION_FUNCTIONS {
    export const concatenate: string;
    export const format: string;
    export const getURL: string;
    export const hashUID: string;
    export const ismatch: string;
    export const lookup: string;
    export const lowercase: string;
    export const mapReferencedUIDs: string;
    export const match: string;
    export const newUID: string;
    export const replace: string;
    export const retainPrivateTags: string;
    export const set: string;
    export const shiftDateByIncrement: string;
    export const shiftDateTimeByIncrement: string;
    export const shiftDateTimeSequenceByIncrement: string;
    export const substring: string;
    export const uppercase: string;
    export const removeAllPrivateTags: string;
    export const echo: string;
    export const describe: string;
    export const alterPixels: string;
    const _delete: string;
    export { _delete as delete };
}
export class Expression {
    static fromObject(raw: any): Expression;
    constructor(funcName: any, ...args: any[]);
    funcName: any;
    args: any[];
    evaluate(anonymizer: any): any;
    concatenate(anonymizer: any, ...args: any[]): string;
    format(_anonymizer: any, formatString: any, ...formatArgs: any[]): any;
    getURL(_anonymizer_anonymizer: any, url: any, key?: any): Promise<any>;
    hashUID(_anonymizer: any, arg: any): string;
    ismatch(_anonymizer: any, value: any, pattern: any): boolean;
    replace(_anonymizer: any, arg: any, target: any, replacement: any): any;
    lowercase(_anonymizer: any, arg: any): any;
    substring(_anonymizer: any, arg: any, beg: any, end: any): any;
    set(anonymizer: any, tagName: any, value: any): void;
    shiftDateByIncrement(_anonymizer: any, arg: any, days: any): string;
    shiftDateTimeByIncrement(anonymizer: any, arg: any, days: any): void;
    shiftDateTimeSequenceByIncrement(anonymizer: any, second: any, tagPath: any): void;
    uppercase(_anonymizer: any, arg: any): any;
    removeAllPrivateTags(anonymizer: any): void;
    echo(_anonymizer: any, ...args: any[]): void;
    lookup(anonymizer: any, key1: any, key2: any): any;
    retainPrivateTags(anonymizer: any, ...args: any[]): void;
    describe(_anonymizer: any, ...args: any[]): void;
    /**
     *
     * @param {Anonymizer} anonymizer
     * @param {*} shape
     * @param {*} shapeParams
     * @param {*} fillPattern
     * @param {*} fillPatternParams
     */
    alterPixels(anonymizer: any, shape: any, shapeParams: any, fillPattern: any, fillPatternParams: any): void;
    delete(anonymizer: any, tagName: any): void;
}
