declare class TagPathLexer {
    static grammarFileName: string;
    static channelNames: string[];
    static modeNames: string[];
    static literalNames: string[];
    static symbolicNames: string[];
    static ruleNames: string[];
    constructor(input: any);
    _interp: any;
    get atn(): any;
}
declare namespace TagPathLexer {
    const EOF: any;
    const T__0: number;
    const T__1: number;
    const T__2: number;
    const T__3: number;
    const LEFT_BRACKET: number;
    const RIGHT_BRACKET: number;
    const HEXWORD: number;
    const POS_INTEGER: number;
    const WS: number;
}
export default TagPathLexer;
