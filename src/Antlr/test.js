const antlr4 = require('antlr4');
const DE6Lexer = require('./lib/DE6Lexer.js');
const DE6Parser = require('./lib/DE6Parser.js');
import DE6ParserListener from './lib/DE6ParserListener';

const input = `version "6.3"
(0008,0008) := "aaa"`;

const chars = new antlr4.InputStream(input);
const lexer = new DE6Lexer.default(chars);

// lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new DE6Parser.default(tokens);
// parser.buildParseTree = true;
const tree = parser.script();
// console.log(tree.toStringTree(parser.ruleNames));
// const printer = new DE6ParserListener();
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
// console.log(printer.elems);

const DE6ParserVisitor = require('./lib/DE6ParserVisitor.js').default;

/**
 * This Visitor walks the tree generated by parsers and produces Python code
 *
 * @returns {object}
 */
class Visitor extends DE6ParserVisitor {
  /**
   * Entry point of tree visiting
   *
   * @param {object} ctx
   * @returns {string}
   */
  start(ctx) {
    return this.visitScript(ctx);
  }

  /**
   * Visits children of current node
   *
   * @param {object} ctx
   * @returns {string}
   */
  visitChildren(ctx) {
    let code = '';

    for (let i = 0; i < ctx.getChildCount(); i++) {
      code += this.visit(ctx.getChild(i));
    }

    return code.trim();
  }

  /**
   * Visits a leaf node and returns a string
   *
   * @param {object} ctx
   * @returns {string}
   */
  visitTerminal(ctx) {
    return ctx.getText();
  }

  /**
   * Visits Property Expression Assignment
   *
   * @param {object} ctx
   * @returns {string}
   */
  visitPropertyExpressionAssignment(ctx) {
    const key = this.visit(ctx.propertyName());
    const value = this.visit(ctx.singleExpression());

    return `'${key}': ${value}`;
  }
}

const output = new Visitor().start(tree);

console.log(output);