// import fs from 'fs';
import debug from 'debug';
import peg from 'pegjs';
import Tracer from 'pegjs-backtrace';
import antlr4 from 'antlr4';

import {
  APP_NAME,
  DEFAULT_SCRIPT_VERSION,
  SUPPORTED_SCRIPT_VERSIONS,
  RULE_RESULT_STATUSES,
  DEFAULT_PARSER_LIBRARY,
  PARSER_LIBRARIES,
} from './Common/Constant';
import { LexicalError, ParseError, RuleError } from './Error';
import { Rule, RuleGroup } from './index';
import DEFAULT_PEG_GRAMMAR from '!!raw-loader!./Peg/Grammar.peg';
// const DEFAULT_PEG_GRAMMAR = fs.readFileSync('./Peg/Grammar.peg', 'utf8');
// const DEFAULT_PEG_GRAMMAR = '';

import DE6Lexer from './Antlr/lib/DE6Lexer.js';
import DE6Parser from './Antlr/lib/DE6Parser.js';
import CustomDE6ParserVisitor from './Antlr/CustomDE6ParserVisitor';

const log = debug(`${APP_NAME}:Parser`);
const PARSER_TYPE = 'DicomEdit';

export default class Parser {
  constructor(
    options = { trace: false, parserLibrary: DEFAULT_PARSER_LIBRARY }
  ) {
    if (options && options.parserLibrary === PARSER_LIBRARIES.PEGJS) {
      this.parserLibrary = PARSER_LIBRARIES.PEGJS;
      this.rawParser = peg.generate(DEFAULT_PEG_GRAMMAR, {
        trace: options.trace,
      });
    } else {
      this.parserLibrary = PARSER_LIBRARIES.ANTLR4;
    }
  }

  static parse(
    script,
    options = { trace: false, parserLibrary: DEFAULT_PARSER_LIBRARY }
  ) {
    const defaultParser = Parser.generateParser(options);
    return defaultParser.parse(script);
  }

  static generateParser(
    options = { trace: false, parserLibrary: DEFAULT_PARSER_LIBRARY }
  ) {
    return new Parser(options);
  }

  parse(script, options = {}) {
    if (this.parserLibrary === PARSER_LIBRARIES.PEGJS) {
      log(`Parsing with ${PARSER_LIBRARIES.PEGJS}`);
      return this.parsePeg(script, options);
    } else {
      log(`Parsing with ${PARSER_LIBRARIES.ANTLR4}`);
      return this.parseAntlr(script);
    }
  }

  parsePeg(script, options = {}) {
    const ast = this.produceAbstractSyntaxTreeFromPeg(script, options);
    return this.produceRuleGroup(ast);
  }

  parseAntlr(script) {
    const chars = new antlr4.InputStream(script);
    const lexer = new DE6Lexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new DE6Parser(tokens);
    parser.buildParseTrees = true;

    const visitor = new CustomDE6ParserVisitor();
    const tree = parser.script();
    visitor.visitScript(tree);

    return visitor.ruleGroup;
  }

  produceAbstractSyntaxTreeFromPeg(script, options = {}) {
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
