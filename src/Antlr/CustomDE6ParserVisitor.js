import debug from 'debug';
import {
  Rule,
  RuleGroup,
  Element,
  Statement,
  ELEMENT_TYPES,
  STATEMENT_TYPES,
  Condition,
  Expression,
  EXPRESSION_FUNCTIONS,
} from '../index';
import { APP_NAME, SUPPORTED_SCRIPT_VERSIONS } from '../Common/Constant';
import { ParseError } from '../Error';
import DE6ParserVisitor from './lib/DE6ParserVisitor';

const log = debug(`${APP_NAME}:CustomDE6ParserVisitor`);

export default class CustomDE6ParserVisitor extends DE6ParserVisitor {
  constructor() {
    super();
    this.ruleGroup = new RuleGroup();
  }

  visitScript(ctx) {
    log('Encountered script.');
    const statements = ctx.statement();
    statements.forEach((statement, idx) => {
      log(`visit statement ${idx}: ${statement.getText()}`);
      this.visit(statement);
    });
  }

  visitStatement(ctx) {
    const res = this.visit(ctx.getChild(0));
    if (res) {
      const rules = Array.isArray(res) ? res : [res];
      rules.forEach((rule) => {
        if (rule instanceof Rule) {
          this.ruleGroup.addRule(rule);
        }
      });
    }
  }

  visitVersion(ctx) {
    const versionString = ctx.STRING().getText().replace(/"/g, '');
    this.ruleGroup.version = versionString;
    if (!SUPPORTED_SCRIPT_VERSIONS.includes(versionString)) {
      throw new ParseError(
        `Unsupported version: ${versionString}. Supported versions are ${SUPPORTED_SCRIPT_VERSIONS}`
      );
    }
  }

  visitInitialization(ctx) {
    log('Encountered initialization: ' + ctx.getText());
    const id = ctx.ID().getText();
    const element = this.visit(ctx.children[2]);
    log(`Set variable: name= ${id}, value= ${element}`);

    return new Rule(
      new Statement(STATEMENT_TYPES.ASSIGN, new Element(ELEMENT_TYPES.IDENTIFIER, id), element)
    );
  }

  // eslint-disable-next-line no-unused-vars
  visitDescribeNamedVariable(ctx) {
    console.log('visitDescribeNamedVariable TBD');
  }

  // eslint-disable-next-line no-unused-vars
  visitDescribeHiddenVariable(ctx) {
    console.log('visitDescribeHiddenVariable TBD');
  }

  // eslint-disable-next-line no-unused-vars
  visitExport(ctx) {
    console.log('visitExport TBD');
  }

  visitAssignment(ctx) {
    log(`Encountered assignment: ${ctx.getText()}`);
    const assignedValue = this.visit(ctx.value());
    const lvalue = this.visit(ctx.lvalue());
    const tagPath = lvalue[0];

    return new Rule(
      new Statement(STATEMENT_TYPES.ASSIGN, new Element(ELEMENT_TYPES.TAG, tagPath), assignedValue)
    );
  }

  visitAssign_if_exists(ctx) {
    log(`Encountered assign_if_exists: ${ctx.getText()}`);
    const assignedValue = this.visit(ctx.value());
    const lvalue = this.visit(ctx.lvalue());
    const tagPath = lvalue[0];

    return new Rule(
      new Statement(
        STATEMENT_TYPES.ASSIGN,
        new Element(ELEMENT_TYPES.TAG, tagPath),
        assignedValue,
        { runsIfExists: true }
      )
    );
  }

  visitTag(ctx) {
    return this.visit(ctx.getChild(0));
  }

  visitTagpath(ctx) {
    const tags = [];
    const seq_elementContexts = ctx.seq_element();
    seq_elementContexts.forEach((sctx) => {
      const v = this.visit(sctx);
      tags.push(v);
    });
    if (ctx.element()) {
      const v = this.visit(ctx.element());
      tags.push(v[0]);
    } else {
      log('TagPath must include an element');
    }
    return tags.join('/');
  }
  visitSeq_element(ctx) {
    if (ctx.element()) {
      let tag = this.visit(ctx.element())[0];
      if (ctx.itemnumber() != null) {
        const itemNumberString = this.visit(ctx.itemnumber()).toString();
        tag += `[${itemNumberString}]`;
      }
      return tag;
    } else {
      return this.visit(ctx.seq_wildcard());
    }
  }

  visitSeq_wildcard(ctx) {
    return `(${ctx.getText()})`;
  }

  visitItemnumber(ctx) {
    if (ctx.INTEGER()) {
      return parseInt(ctx.INTEGER().getText());
    }
  }

  visitPublic_tag(ctx) {
    const group = ctx.PUBLIC_GROUP().getText().substring(1);
    let element = ctx.PUBLIC_ELEMENT().getText();
    element = element.substring(0, element.length - 1);
    return `(${group},${element})`;
  }

  visitPvt_tag(ctx) {
    // const group = ctx.PVT_GROUP().getText().substring(1);
    // let element = ctx.PVT_ELEMENT().getText();
    // element = element.substring(0, element.length - 1); // strip trailing ')'
    // const pvtCreatorID = element.substring(1, element.indexOf('}'));
    // const subindex = element.substring(element.indexOf('}') + 1);
    return ctx.getText();
  }

  visitMethod(ctx) {
    log(`Encountered method term: ${ctx.getText()}`);
    const functionName = ctx.ID().getText();
    const termlist = this.visit(ctx.termlist());

    return new Rule(
      new Statement(
        STATEMENT_TYPES.PROCEDURE,
        new Element(ELEMENT_TYPES.EXPRESSION, new Expression(functionName, ...termlist))
      )
    );
  }

  visitFunctionTerm(ctx) {
    log(`Encountered function term: ${ctx.getText()}`);
    const functionName = ctx.function_stmt().ID().getText();
    const termlist = this.visit(ctx.function_stmt().termlist());

    return new Element(ELEMENT_TYPES.EXPRESSION, new Expression(functionName, ...termlist));
  }

  visitTermlist(ctx) {
    log('Encountered term list.');
    return ctx.term().map((term) => this.visit(term));
  }

  visitValue(ctx) {
    return this.visit(ctx.children[0]);
  }

  visitStringTerm(ctx) {
    const rawText = ctx.getText();
    // Ugh, java strings with backslashes are confusing.
    // User has to write the string with backslashes (likely in regexs) escaped but antlr seems to provide the
    // string with both the escaping and the escaped \.  Remove the escaping \
    const text = rawText
      .substring(1, rawText.length - 1)
      .replace('""', '"')
      .replace('\\\\', '\\');

    return new Element(ELEMENT_TYPES.LITERAL, text);
  }

  visitIdTerm(ctx) {
    return new Element(ELEMENT_TYPES.IDENTIFIER, ctx.getText());
  }

  visitNumberTerm(ctx) {
    return new Element(ELEMENT_TYPES.LITERAL, parseInt(ctx.getText()));
  }

  visitTagPathTerm(ctx) {
    const vtp = this.visit(ctx.tagpath());
    return new Element(ELEMENT_TYPES.TAG, vtp);
  }

  visitDeletion(ctx) {
    log('Encountered deletion: ' + ctx.getText());
    const lvalue = this.visit(ctx.lvalue());
    const tagPath = lvalue[0];

    return new Rule(new Statement(STATEMENT_TYPES.DELETE, new Element(ELEMENT_TYPES.TAG, tagPath)));
  }

  visitRemoveAllPrivateTags() {
    return new Rule(
      new Statement(
        STATEMENT_TYPES.PROCEDURE,
        new Element(
          ELEMENT_TYPES.EXPRESSION,
          new Expression(EXPRESSION_FUNCTIONS.removeAllPrivateTags)
        )
      )
    );
  }

  visitConditional_statement(ctx) {
    const condition = this.visit(ctx.condition());
    const consequent = this.visit(ctx.action(0))[0];
    let alternate = undefined;
    if (ctx.action().length > 1) {
      alternate = this.visit(ctx.action(1))[0];
    }

    return new Rule(consequent.statement, condition, alternate ? alternate.statement : undefined);
  }

  visitCondition(ctx) {
    const op = ctx.conditionOperator().getText();
    const s1 = this.visit(ctx.value(0));
    const s2 = this.visit(ctx.value(1));

    return new Condition(op, s1, s2);
  }

  visitEcho(ctx) {
    const value = this.visit(ctx.value());
    console.log(value.value);
    return new Rule(
      new Statement(
        STATEMENT_TYPES.PROCEDURE,
        new Element(ELEMENT_TYPES.EXPRESSION, new Expression(EXPRESSION_FUNCTIONS.echo, value))
      )
    );
  }
}
