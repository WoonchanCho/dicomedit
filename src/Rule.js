import debug from 'debug';

import { Expression, EXPRESSION_FUNCTIONS } from '.';
import {
  APP_NAME,
  DEFAULT_SCRIPT_VERSION,
  LEXICAL_STATEMENT_TYPES,
  LEXICAL_EXPRESSION_TYPES,
  LEXICAL_OPERAND_TYPES,
  RULE_RESULT_STATUSES,
  LEXICAL_OPERATORS,
} from './Common/Constant';
import { IllegalArgumentsError, RuleError, ParseError } from './Error';

const log = debug(`${APP_NAME}:Rule`);

/**
 * Class representing a group of rules. Includes a DicomEdit script version info.
 */
export class RuleGroup {
  constructor(version, rules) {
    this.version = version;
    if (!rules) {
      rules = [];
    }
    if (!Array.isArray(rules)) {
      throw new IllegalArgumentsError('The rules should be a type of array.');
    }
    this.rules = rules;
  }

  static fromObject(raw) {
    if (!raw || typeof raw !== 'object') {
      throw new IllegalArgumentsError('The input object is not valid');
    }
    const { rules, version } = raw;
    const ruleGroup = new RuleGroup(version || DEFAULT_SCRIPT_VERSION, []);
    if (rules && Array.isArray(rules)) {
      ruleGroup.rules = rules.map((rawRule) => Rule.fromObject(rawRule));
    }
    return ruleGroup;
  }

  addRule(rule) {
    this.rules.push(rule);
  }
}

export class Rule {
  constructor(statement, condition = undefined, elseStatement = undefined) {
    this.statement = statement;
    this.condition = condition;
    this.elseStatement = elseStatement;
    this.used = true;
  }

  static fromObject(raw) {
    return new Rule(
      Statement.fromObject(raw.statement),
      Condition.fromObject(raw.condition),
      Statement.fromObject(raw.elseStatement),
      raw.used
    );
  }

  static fromLexical(raw) {
    if (!raw) {
      throw new RuleError(`The lexical structure is empty: ${raw}`);
    }
    log('Creating rule from lexcal structure');

    return new Rule(
      Statement.fromLexical(raw, false),
      Condition.fromLexical(raw),
      Statement.fromLexical(raw, true)
    );
  }
}

export const STATEMENT_TYPES = {
  ASSIGN: 'ASSIGN',
  DELETE: 'DELETE',
  PROCEDURE: 'PROCEDURE',
};

/**
 * Class representing Statement
 */
export class Statement {
  /**
   * Creates a Statement object. The required parameters differs depending on the type of Statement.
   * @param {string} type - Statement type. There are three available types: ASSIGN, DELETE, and PROCEDURE.
   * @param {Element} operand1 - Available Element types are determined according to the Statement type.
   * @param {Element} [operand2=undefined] - Only required when the type is ASSIGN
   * @param {Object} [options={}] - Option object
   */
  constructor(type, operand1, operand2 = undefined, options = {}) {
    this.type = type;
    this.operand1 = operand1;
    this.operand2 = operand2;
    this.options = options;
  }

  static fromObject(raw) {
    return raw
      ? new Statement(
          raw.type,
          Element.fromObject(raw.operand1),
          Element.fromObject(raw.operand2),
          raw.options
        )
      : undefined;
  }

  /**
   * { type: 'Identifier', name: 'default_series_description' }
   * [ { type: 'TagUnit', name: '00010001', index: null, prefix: null } ]
   * @param {*} raw
   */
  static fromLexical(raw, isElstStatement = false) {
    if (!raw || typeof raw !== 'object') {
      throw new RuleError(`The statement is not valid: ${raw}`);
    }

    const { type: lexicalStatementType } = raw;
    if (
      isElstStatement &&
      lexicalStatementType !== LEXICAL_STATEMENT_TYPES.ConditionalStatement
    ) {
      return undefined;
    }
    log(
      `Creating${
        isElstStatement ? ' Else' : ''
      } Statement from lexical structure`
    );

    switch (lexicalStatementType) {
      case LEXICAL_STATEMENT_TYPES.ExpressionStatement:
        return Statement._fromExpressionStatement(raw);

      case LEXICAL_STATEMENT_TYPES.ConditionalStatement:
        return Statement._fromConditionalStatement(raw, isElstStatement);

      case LEXICAL_STATEMENT_TYPES.EchoStatement:
        return Statement._fromEchoStatement(raw);

      case LEXICAL_STATEMENT_TYPES.DescribeStatement:
        return Statement._fromDescribeStatement(raw);

      case LEXICAL_STATEMENT_TYPES.RemoveAllPrivateTagsStatement:
        return Statement._fromRemoveAllPrivateTagsStatement(raw);

      default:
        throw new ParseError(
          `The statement type of a element in the Abstract syntax tree is not supported: ${lexicalStatementType}`
        );
    }
  }

  static _fromExpressionStatement(raw) {
    if (!raw) {
      throw new RuleError(`The lexical structure is empty: ${raw}`);
    }

    const { type: lexicalStatementType, expression } = raw;
    if (lexicalStatementType !== LEXICAL_STATEMENT_TYPES.ExpressionStatement) {
      throw new RuleError(
        `Only the ${LEXICAL_STATEMENT_TYPES.ExpressionStatement} type is allowed: ${lexicalStatementType}`
      );
    }
    if (!expression || typeof expression !== 'object') {
      throw new RuleError(
        `The expression property is not valid: ${expression}`
      );
    }
    log('Creating Statement from lexical expression statement');

    return this._createStatementFromLex(expression);
  }

  static _createStatementFromLex(expression) {
    const {
      type: expressionType,
      left,
      right,
      argument,
      object,
      property,
    } = expression;
    let operand1 = undefined,
      operand2 = undefined;
    let statementType = undefined;
    let funcName = undefined;
    let args = [];

    switch (expressionType) {
      case LEXICAL_EXPRESSION_TYPES.BinaryExpression:
      case LEXICAL_EXPRESSION_TYPES.AssignmentExpression:
        statementType = STATEMENT_TYPES.ASSIGN;
        operand1 = Element.fromLexical(left);
        operand2 = Element.fromLexical(right);
        break;

      case LEXICAL_EXPRESSION_TYPES.UnaryExpression:
        statementType = STATEMENT_TYPES.DELETE;
        operand1 = Element.fromLexical(argument);
        break;

      case LEXICAL_EXPRESSION_TYPES.MemberExpression:
        statementType = STATEMENT_TYPES.PROCEDURE;
        funcName = object.name;
        if (property.type === 'SequenceExpression') {
          property.expressions.forEach((expression) => {
            args.push(Element.fromLexical(expression));
          });
        } else {
          args.push(Element.fromLexical(property));
        }

        operand1 = Element.fromObject({
          type: ELEMENT_TYPES.EXPRESSION,
          value: new Expression(funcName, ...args),
        });

        break;

      default:
        throw new RuleError(
          `The expression type ${expressionType} is not supported`,
          RULE_RESULT_STATUSES.FATAL
        );
    }

    return new Statement(statementType, operand1, operand2);
  }

  static _fromConditionalStatement(raw, isElseStatement) {
    if (!raw) {
      throw new RuleError(`The lexical structure is empty: ${raw}`);
    }

    const { type: lexicalStatementType, consequent, alternate } = raw;
    if (lexicalStatementType !== LEXICAL_STATEMENT_TYPES.ConditionalStatement) {
      throw new RuleError(
        `Only the ${LEXICAL_STATEMENT_TYPES.ConditionalStatement} type is allowed: ${lexicalStatementType}`
      );
    }

    if (!isElseStatement) {
      if (!consequent) {
        throw new RuleError(
          `The consequent property is not valid: ${consequent}`
        );
      }
      return this._createStatementFromLex(consequent);
    } else {
      if (!alternate) {
        return undefined;
      }
      return this._createStatementFromLex(alternate);
    }
  }

  static _fromEchoStatement(raw) {
    if (!raw) {
      throw new RuleError(`The lexical structure is empty: ${raw}`);
    }

    const { type: lexicalStatementType, expression } = raw;
    if (lexicalStatementType !== LEXICAL_STATEMENT_TYPES.EchoStatement) {
      throw new RuleError(
        `Only the ${LEXICAL_STATEMENT_TYPES.EchoStatement} type is allowed: ${lexicalStatementType}`
      );
    }
    const element = Element.fromLexical(expression);
    const echoArgs = Array.isArray(element) ? element : [element];
    return new Statement(
      STATEMENT_TYPES.PROCEDURE,
      Element.fromObject({
        type: ELEMENT_TYPES.EXPRESSION,
        value: new Expression(EXPRESSION_FUNCTIONS.echo, ...echoArgs),
      })
    );
  }

  static _fromDescribeStatement(raw) {
    return new Statement(
      STATEMENT_TYPES.PROCEDURE,
      Element.fromObject({
        type: ELEMENT_TYPES.EXPRESSION,
        value: new Expression(
          EXPRESSION_FUNCTIONS.describe,
          raw.identifier.name,
          raw.hidden
        ),
      })
    );
  }
  static _fromRemoveAllPrivateTagsStatement(raw) {
    if (!raw) {
      throw new RuleError(`The lexical structure is empty: ${raw}`);
    }

    const { type: lexicalStatementType } = raw;
    if (
      lexicalStatementType !==
      LEXICAL_STATEMENT_TYPES.RemoveAllPrivateTagsStatement
    ) {
      throw new RuleError(
        `Only the ${LEXICAL_STATEMENT_TYPES.RemoveAllPrivateTagsStatement} type is allowed: ${lexicalStatementType}`
      );
    }

    return new Statement(
      STATEMENT_TYPES.PROCEDURE,
      Element.fromObject({
        type: ELEMENT_TYPES.EXPRESSION,
        value: {
          funcName: EXPRESSION_FUNCTIONS.removeAllPrivateTags,
          args: [],
        },
      })
    );
  }
}

export const CONDITION_TYPES = {
  EQUAL: 'EQUAL',
  NOT_EQUAL: 'NOT_EQUAL',
  MATCH: 'MATCH',
  NOT_MATCH: 'NOT_MATCH',
};

/**
 *
 */
export class Condition {
  /**
   *
   * @param {string} operator
   * @param {Element} operand1
   * @param {Element} operand2
   */
  constructor(operator, operand1, operand2) {
    this.operator = operator;
    this.operand1 = operand1;
    this.operand2 = operand2;
  }

  static fromObject(raw) {
    return raw
      ? new Condition(raw.operator, raw.operand1, raw.operand2)
      : undefined;
  }

  static fromLexical(raw) {
    const { test } = raw;
    if (!test) {
      return undefined;
    }

    log('Creating Condition expression from lexical structure');

    const { operator: lexicalOperator, left, right } = test;
    let operator = undefined;
    switch (lexicalOperator) {
      case LEXICAL_OPERATORS.EQUAL:
        operator = CONDITION_TYPES.EQUAL;
        break;

      case LEXICAL_OPERATORS.NOT_EQUAL:
        operator = CONDITION_TYPES.NOT_EQUAL;
        break;

      case LEXICAL_OPERATORS.MATCH:
        operator = CONDITION_TYPES.MATCH;
        break;

      case LEXICAL_OPERATORS.NOT_MATCH:
        operator = CONDITION_TYPES.NOT_MATCH;
        break;

      default:
        throw new RuleError(`The operator is not valid: ${lexicalOperator}`);
    }

    return new Condition(
      operator,
      Element.fromLexical(left),
      Element.fromLexical(right)
    );
  }
}

export const ELEMENT_TYPES = {
  TAG: 'TAG',
  LITERAL: 'LITERAL',
  IDENTIFIER: 'IDENTIFIER',
  EXPRESSION: 'EXPRESSION',
};

/**
 * Class representing Element
 */
export class Element {
  /**
   * Creates an Element object
   * @param {string} type
   * @param {string|string[]} value - The type of the value differs depending on the Element type
   * @param {Object} options
   */
  constructor(type, value, options = {}) {
    this.type = type;
    this.value = value;
    this.options = options;
  }

  static fromObject(raw) {
    if (!raw) {
      return undefined;
    }
    const { type, value } = raw;
    let newValue = undefined;
    if (type === ELEMENT_TYPES.EXPRESSION) {
      newValue = Expression.fromObject(value);
    } else {
      newValue = value;
    }
    return new Element(type, newValue);
  }

  static fromLexical(raw) {
    const {
      type: lexicalOperandType,
      name,
      value,
      units,
      object,
      property,
    } = raw;
    let elementType = undefined;
    let elementValue = undefined;
    let funcName = undefined;
    let args = undefined;
    switch (lexicalOperandType) {
      case LEXICAL_OPERAND_TYPES.Identifier:
        elementType = ELEMENT_TYPES.IDENTIFIER;
        elementValue = name;
        break;

      case LEXICAL_OPERAND_TYPES.Literal:
        elementType = ELEMENT_TYPES.LITERAL;
        elementValue = value;
        break;

      case LEXICAL_OPERAND_TYPES.TagLiteral:
        elementType = ELEMENT_TYPES.TAG;
        elementValue = Element._constructTagLiteralValue(units);
        break;

      case LEXICAL_OPERAND_TYPES.MemberExpression:
        funcName = object.name;
        args = Element.fromLexical(property);
        args = Array.isArray(args) ? args : [args];
        elementType = ELEMENT_TYPES.EXPRESSION;
        elementValue = new Expression(funcName, ...args);
        break;

      case LEXICAL_OPERAND_TYPES.SequenceExpression:
        return raw.expressions.map((expression) =>
          Element.fromLexical(expression)
        );
    }

    return new Element(elementType, elementValue);
  }

  static _constructTagLiteralValue(units) {
    return units
      .map(
        (unit) =>
          `${unit.name}${unit.index !== null ? '[' + unit.index + ']' : ''}`
      )
      .join('/');
  }
}
