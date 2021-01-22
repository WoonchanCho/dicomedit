declare class TagPathParser {
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
    tagpath(): TagpathContext;
    state: number;
    tag(): TagContext;
    group(): GroupContext;
    element(): ElementContext;
    itemnumber(): ItemnumberContext;
    num(): NumContext;
}
declare namespace TagPathParser {
    export const EOF: any;
    export const T__0: number;
    export const T__1: number;
    export const T__2: number;
    export const T__3: number;
    export const LEFT_BRACKET: number;
    export const RIGHT_BRACKET: number;
    export const HEXWORD: number;
    export const POS_INTEGER: number;
    export const WS: number;
    export const RULE_tagpath: number;
    export const RULE_tag: number;
    export const RULE_group: number;
    export const RULE_element: number;
    export const RULE_itemnumber: number;
    export const RULE_num: number;
    export { TagpathContext };
    export { TagContext };
    export { GroupContext };
    export { ElementContext };
    export { ItemnumberContext };
    export { NumContext };
}
export default TagPathParser;
declare class TagpathContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tag: (i: any) => any;
    EOF(): any;
    itemnumber: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TagContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    group(): any;
    element(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class GroupContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HEXWORD(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ElementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HEXWORD(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ItemnumberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LEFT_BRACKET(): any;
    num(): any;
    RIGHT_BRACKET(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class NumContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    POS_INTEGER(): any;
    HEXWORD(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
