declare class DE6Parser {
    static grammarFileName: string;
    static literalNames: string[];
    static symbolicNames: string[];
    static ruleNames: string[];
    constructor(input: any);
    _interp: any;
    ruleNames: string[];
    literalNames: string[];
    symbolicNames: string[];
    get atn(): any;
    script(): ScriptContext;
    state: number;
    separator(): SeparatorContext;
    statement(): StatementContext;
    action(): ActionContext;
    assign_if_exists(): Assign_if_existsContext;
    assignment(): AssignmentContext;
    lvalue(): LvalueContext;
    value(): ValueContext;
    term(): TermContext;
    variable(): VariableContext;
    number(): NumberContext;
    termlist(): TermlistContext;
    method(): MethodContext;
    de_function(): De_functionContext;
    deletion(): DeletionContext;
    echo(): EchoContext;
    conditional_statement(): Conditional_statementContext;
    condition(): ConditionContext;
    conditionOperator(): ConditionOperatorContext;
    initialization(): InitializationContext;
    description(): DescriptionContext;
    de_export(): De_exportContext;
    removeAllPrivateTags(): RemoveAllPrivateTagsContext;
    version(): VersionContext;
    tag(): TagContext;
    element(): ElementContext;
    seq_element(): Seq_elementContext;
    tagpath(): TagpathContext;
    itemnumber(): ItemnumberContext;
    seq_wildcard(): Seq_wildcardContext;
    public_tag(): Public_tagContext;
    pvt_tag(): Pvt_tagContext;
}
declare namespace DE6Parser {
    export const EOF: any;
    export const PUBLIC_GROUP: number;
    export const PVT_GROUP: number;
    export const PUBLIC_ELEMENT: number;
    export const PVT_ELEMENT: number;
    export const HEXDIGIT_WILDCARD: number;
    export const TEST_SYMBOL: number;
    export const TEST_SEPERATOR: number;
    export const ITEM_WILDCARD: number;
    export const SEQ_WILDCARD: number;
    export const WS: number;
    export const COMMA: number;
    export const ECHO: number;
    export const EQUALS: number;
    export const NOT_EQUALS: number;
    export const MATCHES: number;
    export const NOT_MATCHES: number;
    export const ASSIGN: number;
    export const ASSIGN_IF_EXISTS: number;
    export const DESCRIBE: number;
    export const HIDDEN_TOKEN: number;
    export const CONST_TOKEN: number;
    export const IMMUTABLE_TOKEN: number;
    export const EXPORT: number;
    export const REMOVE_ALL_PRIVATE_TAGS: number;
    export const VERSION_WORD: number;
    export const LEFT_BRACKET: number;
    export const RIGHT_BRACKET: number;
    export const SLASH: number;
    export const DELETE_OPERATOR: number;
    export const INTEGER: number;
    export const FLOAT: number;
    export const ID: number;
    export const COMMENT: number;
    export const NEWLINE: number;
    export const STRING: number;
    export const OPEN: number;
    export const PVT_CREATOR_ID: number;
    export const CLOSE: number;
    export const RULE_script: number;
    export const RULE_separator: number;
    export const RULE_statement: number;
    export const RULE_action: number;
    export const RULE_assign_if_exists: number;
    export const RULE_assignment: number;
    export const RULE_lvalue: number;
    export const RULE_value: number;
    export const RULE_term: number;
    export const RULE_variable: number;
    export const RULE_number: number;
    export const RULE_termlist: number;
    export const RULE_method: number;
    export const RULE_de_function: number;
    export const RULE_deletion: number;
    export const RULE_echo: number;
    export const RULE_conditional_statement: number;
    export const RULE_condition: number;
    export const RULE_conditionOperator: number;
    export const RULE_initialization: number;
    export const RULE_description: number;
    export const RULE_de_export: number;
    export const RULE_removeAllPrivateTags: number;
    export const RULE_version: number;
    export const RULE_tag: number;
    export const RULE_element: number;
    export const RULE_seq_element: number;
    export const RULE_tagpath: number;
    export const RULE_itemnumber: number;
    export const RULE_seq_wildcard: number;
    export const RULE_public_tag: number;
    export const RULE_pvt_tag: number;
    export { TagpathLvalueContext };
    export { TagPathTermContext };
    export { StringTermContext };
    export { IdTermContext };
    export { NumberTermContext };
    export { FunctionTermContext };
    export { IntvalueContext };
    export { FloatvalueContext };
    export { DescribeHiddenVariableContext };
    export { DescribeImmutableVariableContext };
    export { DescribeConstantVariableContext };
    export { DescribeNamedVariableContext };
    export { ScriptContext };
    export { SeparatorContext };
    export { StatementContext };
    export { ActionContext };
    export { Assign_if_existsContext };
    export { AssignmentContext };
    export { LvalueContext };
    export { ValueContext };
    export { TermContext };
    export { VariableContext };
    export { NumberContext };
    export { TermlistContext };
    export { MethodContext };
    export { De_functionContext };
    export { DeletionContext };
    export { EchoContext };
    export { Conditional_statementContext };
    export { ConditionContext };
    export { ConditionOperatorContext };
    export { InitializationContext };
    export { DescriptionContext };
    export { De_exportContext };
    export { RemoveAllPrivateTagsContext };
    export { VersionContext };
    export { TagContext };
    export { ElementContext };
    export { Seq_elementContext };
    export { TagpathContext };
    export { ItemnumberContext };
    export { Seq_wildcardContext };
    export { Public_tagContext };
    export { Pvt_tagContext };
}
export default DE6Parser;
declare class ScriptContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EOF(): any;
    separator: (i: any) => any;
    statement: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class SeparatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    NEWLINE: (i: any) => any;
    COMMENT: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class StatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    action(): any;
    conditional_statement(): any;
    method(): any;
    initialization(): any;
    description(): any;
    de_export(): any;
    removeAllPrivateTags(): any;
    version(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ActionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    assignment(): any;
    assign_if_exists(): any;
    deletion(): any;
    initialization(): any;
    echo(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Assign_if_existsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    lvalue(): any;
    ASSIGN_IF_EXISTS(): any;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class AssignmentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    lvalue(): any;
    ASSIGN(): any;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class LvalueContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    copyFrom(ctx: any): void;
}
declare class ValueContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    term(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TermContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    copyFrom(ctx: any): void;
}
declare class VariableContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ID(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class NumberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    copyFrom(ctx: any): void;
}
declare class TermlistContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    term: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class MethodContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ID(): any;
    LEFT_BRACKET(): any;
    RIGHT_BRACKET(): any;
    termlist(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class De_functionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ID(): any;
    LEFT_BRACKET(): any;
    RIGHT_BRACKET(): any;
    termlist(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class DeletionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DELETE_OPERATOR(): any;
    lvalue(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class EchoContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ECHO(): any;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Conditional_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    condition(): any;
    TEST_SYMBOL(): any;
    action: (i: any) => any;
    TEST_SEPERATOR(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ConditionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    value: (i: any) => any;
    conditionOperator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ConditionOperatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EQUALS(): any;
    MATCHES(): any;
    NOT_EQUALS(): any;
    NOT_MATCHES(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class InitializationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ID(): any;
    ASSIGN(): any;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class DescriptionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    copyFrom(ctx: any): void;
}
declare class De_exportContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EXPORT(): any;
    ID(): any;
    STRING(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class RemoveAllPrivateTagsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    REMOVE_ALL_PRIVATE_TAGS(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class VersionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    VERSION_WORD(): any;
    STRING(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TagContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    public_tag(): any;
    pvt_tag(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ElementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    public_tag(): any;
    pvt_tag(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Seq_elementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    element(): any;
    itemnumber(): any;
    seq_wildcard(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TagpathContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    element(): any;
    seq_element: (i: any) => any;
    SLASH: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ItemnumberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LEFT_BRACKET(): any;
    RIGHT_BRACKET(): any;
    INTEGER(): any;
    ITEM_WILDCARD(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Seq_wildcardContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SEQ_WILDCARD(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Public_tagContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PUBLIC_GROUP(): any;
    COMMA(): any;
    PUBLIC_ELEMENT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Pvt_tagContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PVT_GROUP(): any;
    COMMA(): any;
    PVT_ELEMENT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TagpathLvalueContext extends LvalueContext {
    constructor(parser: any, ctx: any);
    tagpath(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TagPathTermContext extends TermContext {
    constructor(parser: any, ctx: any);
    tagpath(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class StringTermContext extends TermContext {
    constructor(parser: any, ctx: any);
    STRING(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class IdTermContext extends TermContext {
    constructor(parser: any, ctx: any);
    variable(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class NumberTermContext extends TermContext {
    constructor(parser: any, ctx: any);
    number(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class FunctionTermContext extends TermContext {
    constructor(parser: any, ctx: any);
    de_function(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class IntvalueContext extends NumberContext {
    constructor(parser: any, ctx: any);
    INTEGER(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class FloatvalueContext extends NumberContext {
    constructor(parser: any, ctx: any);
    FLOAT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class DescribeHiddenVariableContext extends DescriptionContext {
    constructor(parser: any, ctx: any);
    DESCRIBE(): any;
    ID(): any;
    HIDDEN_TOKEN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class DescribeImmutableVariableContext extends DescriptionContext {
    constructor(parser: any, ctx: any);
    DESCRIBE(): any;
    ID(): any;
    IMMUTABLE_TOKEN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class DescribeConstantVariableContext extends DescriptionContext {
    constructor(parser: any, ctx: any);
    DESCRIBE(): any;
    ID(): any;
    CONST_TOKEN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class DescribeNamedVariableContext extends DescriptionContext {
    constructor(parser: any, ctx: any);
    DESCRIBE(): any;
    ID(): any;
    STRING(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
