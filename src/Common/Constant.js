export const APP_NAME = 'DicomEditJS';
export const DEFAULT_SCRIPT_VERSION = '6.3';
export const SUPPORTED_SCRIPT_VERSIONS = ['6.0', '6.1', '6.2', '6.3'];

export const PARSER_LIBRARIES = {
  PEGJS: 'PEGJS',
  ANTLR4: 'ANTLR4',
};
export const DEFAULT_PARSER_LIBRARY = PARSER_LIBRARIES.ANTLR4;

export const LEXICAL_STATEMENT_TYPES = {
  ConditionalStatement: 'ConditionalStatement',
  EchoStatement: 'EchoStatement',
  DescribeStatement: 'DescribeStatement',
  RemoveAllPrivateTagsStatement: 'RemoveAllPrivateTagsStatement',
  ExpressionStatement: 'ExpressionStatement',
};

export const LEXICAL_EXPRESSION_TYPES = {
  BinaryExpression: 'BinaryExpression',
  UnaryExpression: 'UnaryExpression',
  AssignmentExpression: 'AssignmentExpression',
  MemberExpression: 'MemberExpression',
};

export const LEXICAL_OPERAND_TYPES = {
  Identifier: 'Identifier',
  Literal: 'Literal',
  TagLiteral: 'TagLiteral',
  MemberExpression: 'MemberExpression',
  SequenceExpression: 'SequenceExpression',
};

export const LEXICAL_OPERATORS = {
  EQUAL: '=',
  NOT_EQUAL: '!=',
  MATCH: '~',
  NOT_MATCH: '!~',
};

export const RULE_RESULT_STATUSES = {
  COMPLETED: 'COMPLETED',
  SKIPPED: 'SKIPPED',
  FATAL: 'FATAL',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
};

export const TAG_TYPES = {
  PUBLIC: 'PUBLIC',
  PRIVATE_HEADER: 'PRIVATE_HEADER',
  PRIVATE_MEMBER: 'PRIVATE_MEMBER',
};
