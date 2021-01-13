const assert = require('chai').assert;
const {
  default: defaultExport,
  Anonymizer,
  RuleGroup,
  Rule,
  Statement,
  Condition,
  Element,
  Expression,
  Parser,
  TagLiteral,
  STATEMENT_TYPES,
  CONDITION_TYPES,
  ELEMENT_TYPES,
  EXPRESSION_FUNCTIONS,
} = require('../dist/node/dicomedit');

describe('index.js', function () {
  describe('The imported module', function () {
    const identifiers = [
      { name: 'Anonymizer', field: Anonymizer, type: 'function' },
      { name: 'RuleGroup', field: RuleGroup, type: 'function' },
      { name: 'Rule', field: Rule, type: 'function' },
      { name: 'Statement', field: Statement, type: 'function' },
      { name: 'Condition', field: Condition, type: 'function' },
      { name: 'Element', field: Element, type: 'function' },
      { name: 'Expression', field: Expression, type: 'function' },
      { name: 'Parser', field: Parser, type: 'function' },
      { name: 'TagLiteral', field: TagLiteral, type: 'function' },
      { name: 'STATEMENT_TYPES', field: STATEMENT_TYPES, type: 'object' },
      { name: 'CONDITION_TYPES', field: CONDITION_TYPES, type: 'object' },
      { name: 'ELEMENT_TYPES', field: ELEMENT_TYPES, type: 'object' },
      {
        name: 'EXPRESSION_FUNCTIONS',
        field: EXPRESSION_FUNCTIONS,
        type: 'object',
      },
    ];
    identifiers.forEach((identifier) => {
      it(`should contain the ${identifier.name} class`, function () {
        assert.typeOf(identifier.field, identifier.type);
      });
    });
    it(`should contain a default class of a type of Anoymizer`, function () {
      assert.equal(defaultExport, Anonymizer);
    });
  });
});
