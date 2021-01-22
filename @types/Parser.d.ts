export default class Parser {
    static parse(script: any, options?: {
        trace: boolean;
        parserLibrary: string;
    }): RuleGroup;
    static generateParser(options?: {
        trace: boolean;
        parserLibrary: string;
    }): Parser;
    constructor(options?: {
        trace: boolean;
        parserLibrary: string;
    });
    parserLibrary: string;
    rawParser: any;
    parse(script: any, options?: {}): RuleGroup;
    parsePeg(script: any, options?: {}): RuleGroup;
    parseAntlr(script: any): RuleGroup;
    produceAbstractSyntaxTreeFromPeg(script: any, options?: {}): any;
    produceRuleGroup(ast: any): RuleGroup;
    validateAst(ast: any): void;
}
import { RuleGroup } from ".";
