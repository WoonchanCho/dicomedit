/**
 * Class representing a group of rules. Includes a DicomEdit script version info.
 */
export class RuleGroup {
    static fromObject(raw: any): RuleGroup;
    constructor(version?: string, rules?: any[]);
    version: string;
    rules: any[];
    addRule(rule: any): void;
}
export class Rule {
    static fromObject(raw: any): Rule;
    static fromLexical(raw: any): Rule;
    constructor(statement: any, condition?: any, elseStatement?: any);
    statement: any;
    condition: any;
    elseStatement: any;
    used: boolean;
}
export namespace STATEMENT_TYPES {
    const ASSIGN: string;
    const DELETE: string;
    const PROCEDURE: string;
}
/**
 * Class representing Statement
 */
export class Statement {
    static fromObject(raw: any): Statement;
    /**
     * { type: 'Identifier', name: 'default_series_description' }
     * [ { type: 'TagUnit', name: '00010001', index: null, prefix: null } ]
     * @param {*} raw
     */
    static fromLexical(raw: any, isElstStatement?: boolean): Statement;
    static _fromExpressionStatement(raw: any): Statement;
    static _createStatementFromLex(expression: any): Statement;
    static _fromConditionalStatement(raw: any, isElseStatement: any): Statement;
    static _fromEchoStatement(raw: any): Statement;
    static _fromDescribeStatement(raw: any): Statement;
    static _fromRemoveAllPrivateTagsStatement(raw: any): Statement;
    /**
     * Creates a Statement object. The required parameters differs depending on the type of Statement.
     * @param {string} type - Statement type. There are three available types: ASSIGN, DELETE, and PROCEDURE.
     * @param {Element} operand1 - Available Element types are determined according to the Statement type.
     * @param {Element} [operand2=undefined] - Only required when the type is ASSIGN
     * @param {Object} [options={}] - Option object
     */
    constructor(type: string, operand1: Element, operand2?: Element, options?: any);
    type: string;
    operand1: Element;
    operand2: Element;
    options: any;
}
export namespace CONDITION_TYPES {
    const EQUAL: string;
    const NOT_EQUAL: string;
    const MATCH: string;
    const NOT_MATCH: string;
}
/**
 *
 */
export class Condition {
    static fromObject(raw: any): Condition;
    static fromLexical(raw: any): Condition;
    /**
     *
     * @param {string} operator
     * @param {Element} operand1
     * @param {Element} operand2
     */
    constructor(operator: string, operand1: Element, operand2: Element);
    operator: string;
    operand1: Element;
    operand2: Element;
}
export namespace ELEMENT_TYPES {
    const TAG: string;
    const LITERAL: string;
    const IDENTIFIER: string;
    const EXPRESSION: string;
}
/**
 * Class representing Element
 */
export class Element {
    static fromObject(raw: any): Element;
    static fromLexical(raw: any): any;
    static _constructTagLiteralValue(units: any): any;
    /**
     * Creates an Element object
     * @param {string} type
     * @param {string|string[]} value - The type of the value differs depending on the Element type
     * @param {Object} options
     */
    constructor(type: string, value: string | string[], options?: any);
    type: string;
    value: string | string[];
    options: any;
    toString(): string;
}
