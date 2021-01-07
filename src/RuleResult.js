export class RuleResultItem {
  constructor(idx, rule, status, error = undefined) {
    this.idx = idx;
    this.rule = rule;
    this.status = status;
    this.error = error;
  }
}

export class RuleResult {
  constructor() {
    this.results = [];
  }

  clean() {
    this.results = [];
  }

  addResult(idx, rule, status, error) {
    this.results.push(new RuleResultItem(idx, rule, status, error));
  }
}
