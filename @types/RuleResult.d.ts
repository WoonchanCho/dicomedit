export class RuleResultItem {
    constructor(idx: any, rule: any, status: any, error?: any);
    idx: any;
    rule: any;
    status: any;
    error: any;
}
export class RuleResult {
    results: any[];
    clean(): void;
    addResult(idx: any, rule: any, status: any, error: any): void;
}
