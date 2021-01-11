import peg from 'pegjs';
import Tracer from 'pegjs-backtrace';
import debug from 'debug';
import fs from 'fs';

import {
  APP_NAME,
  DEFAULT_SCRIPT_VERSION,
  SUPPORTED_SCRIPT_VERSIONS,
  RULE_RESULT_STATUSES,
} from './Common/Constant';
import { LexicalError, ParseError, RuleError, EnvironmentError } from './Error';
import { Rule, RuleGroup } from './index';
import DEFAULT_GRAMMAR from '!!raw-loader!./Peg/Grammar.peg';
// const DEFAULT_GRAMMAR = fs.readFileSync('./Peg/Grammar.peg');

const log = debug(`${APP_NAME}:Parser`);
const PARSER_TYPE = 'DicomEdit';

export default class Parser {
  constructor(rawParser) {
    this.rawParser = rawParser;
  }

  static parse(script) {
    const defaultParser = Parser.generateParser();
    return defaultParser.parse(script);
  }

  static generateParserFromFile(
    filename = undefined,
    options = { trace: false }
  ) {
    if (!fs) {
      throw new EnvironmentError(
        'This function is supported only on the Node.JS environment'
      );
    }

    const grammar = filename
      ? fs.readFileSync(filename, 'utf8')
      : DEFAULT_GRAMMAR;

    return Parser.generateParser(grammar, { trace: options.trace });
  }

  static generateParser(grammar = undefined, options = { trace: false }) {
    return new Parser(
      peg.generate(grammar ? grammar : DEFAULT_GRAMMAR, {
        trace: options.trace,
      })
    );
  }

  parse(script, options = {}) {
    const ast = this.produceAbstractSyntaxTree(script, options);
    const final = this.produceRuleGroup(ast);

    return final;
  }

  produceAbstractSyntaxTree(script, options = {}) {
    log('Producing Abstract Syntax Tree');
    const { trace } = options;
    let parserOptions = {};
    let tracer;
    if (trace === true) {
      tracer = new Tracer(script, { showFullPath: true });
      parserOptions.tracer = tracer;
    }
    try {
      return this.rawParser.parse(script, parserOptions);
    } catch (err) {
      throw new LexicalError(err.message, err, tracer);
    }
  }

  produceRuleGroup(ast) {
    log('Producing Rule Group');
    this.validateAst(ast);
    const { version, body } = ast;
    const ruleGroup = new RuleGroup(version);

    body.forEach((element) => {
      try {
        const rule = Rule.fromLexical(element);
        if (rule) {
          ruleGroup.addRule(rule);
        }
      } catch (err) {
        if (
          !(err instanceof RuleError) ||
          err.severiry === RULE_RESULT_STATUSES.FATAL
        ) {
          throw err;
        }
      }
    });
    return ruleGroup;
  }

  validateAst(ast) {
    if (!ast) {
      throw new ParseError(`Abstract syntax tree is empty`, ast);
    }
    const { type, version } = ast;
    if (type !== PARSER_TYPE) {
      throw new ParseError(
        `The AST type should be ${PARSER_TYPE}, but the type for this AST is ${type}`
      );
    }
    if (!version) {
      ast.version = DEFAULT_SCRIPT_VERSION;
    }
    if (
      !SUPPORTED_SCRIPT_VERSIONS.filter((item) => item === String(version))
        .length
    ) {
      throw new Parser(`The provided version (${version}) is not supported`);
    }
  }
}
