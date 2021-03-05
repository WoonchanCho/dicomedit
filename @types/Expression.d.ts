export namespace EXPRESSION_FUNCTIONS {
    const concatenate: string;
    const format: string;
    const getURL: string;
    const hashUID: string;
    const ismatch: string;
    const lookup: string;
    const lowercase: string;
    const mapReferencedUIDs: string;
    const match: string;
    const newUID: string;
    const replace: string;
    const retainPrivateTags: string;
    const set: string;
    const shiftDateByIncrement: string;
    const shiftDateTimeByIncrement: string;
    const shiftDateTimeSequenceByIncrement: string;
    const substring: string;
    const uppercase: string;
    const removeAllPrivateTags: string;
    const echo: string;
    const describe: string;
    const alterPixels: string;
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
}
