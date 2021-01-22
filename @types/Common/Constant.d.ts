export const APP_NAME: "DicomEditJS";
export const DEFAULT_SCRIPT_VERSION: "6.3";
export const SUPPORTED_SCRIPT_VERSIONS: string[];
export namespace PARSER_LIBRARIES {
    const PEGJS: string;
    const ANTLR4: string;
}
export const DEFAULT_PARSER_LIBRARY: string;
export namespace LEXICAL_STATEMENT_TYPES {
    const ConditionalStatement: string;
    const EchoStatement: string;
    const DescribeStatement: string;
    const RemoveAllPrivateTagsStatement: string;
    const ExpressionStatement: string;
}
export namespace LEXICAL_EXPRESSION_TYPES {
    const BinaryExpression: string;
    const UnaryExpression: string;
    const AssignmentExpression: string;
    const MemberExpression: string;
}
export namespace LEXICAL_OPERAND_TYPES {
    export const Identifier: string;
    export const Literal: string;
    export const TagLiteral: string;
    const MemberExpression_1: string;
    export { MemberExpression_1 as MemberExpression };
    export const SequenceExpression: string;
}
export namespace LEXICAL_OPERATORS {
    const EQUAL: string;
    const NOT_EQUAL: string;
    const MATCH: string;
    const NOT_MATCH: string;
}
export namespace RULE_RESULT_STATUSES {
    const COMPLETED: string;
    const SKIPPED: string;
    const FATAL: string;
    const ERROR: string;
    const WARNING: string;
}
export namespace TAG_TYPES {
    const PUBLIC: string;
    const PRIVATE_HEADER: string;
    const PRIVATE_MEMBER: string;
}
