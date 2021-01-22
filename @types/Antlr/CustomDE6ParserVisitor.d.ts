export default class CustomDE6ParserVisitor extends DE6ParserVisitor {
    ruleGroup: RuleGroup;
    visitExport(ctx: any): void;
}
import DE6ParserVisitor from "./lib/DE6ParserVisitor";
import { RuleGroup } from "..";
