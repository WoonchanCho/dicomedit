/*! dicomedit - 0.0.3 - 2021-01-08 | (c) 2020 Woonchan Cho | http://github.com */
this["webpackHotUpdateDicomEdit"]("dicomedit",{

/***/ "./Parser.js":
/*!*******************!*\
  !*** ./Parser.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Parser
/* harmony export */ });
/* harmony import */ var pegjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pegjs */ "../node_modules/pegjs/lib/peg.js");
/* harmony import */ var pegjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pegjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pegjs_backtrace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pegjs-backtrace */ "../node_modules/pegjs-backtrace/src/main.js");
/* harmony import */ var pegjs_backtrace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pegjs_backtrace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "../node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common_Constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Common/Constant */ "./Common/Constant.js");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Error */ "./Error/LexicalError.js");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Error */ "./Error/RuleError.js");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Error */ "./Error/ParseError.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./Rule.js");






 // import DEFAULT_GRAMMAR from '!!raw-loader!./Peg/Grammar.peg';

const DEFAULT_GRAMMAR = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync('./Peg/Grammar.peg');
const log = debug__WEBPACK_IMPORTED_MODULE_2___default()(`${_Common_Constant__WEBPACK_IMPORTED_MODULE_4__.APP_NAME}:Parser`);
const PARSER_TYPE = 'DicomEdit';
class Parser {
  constructor(rawParser) {
    this.rawParser = rawParser;
  }

  static parse(script) {
    const defaultParser = Parser.generateParser();
    return defaultParser.parse(script);
  }

  static generateParserFromFile(filename = undefined, options = {
    trace: false
  }) {
    const grammar = filename ? fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(filename, 'utf8') : DEFAULT_GRAMMAR;
    return Parser.generateParser(grammar, {
      trace: options.trace
    });
  }

  static generateParser(grammar = undefined, options = {
    trace: false
  }) {
    return new Parser(pegjs__WEBPACK_IMPORTED_MODULE_0___default().generate(grammar ? grammar : DEFAULT_GRAMMAR, {
      trace: options.trace
    }));
  }

  parse(script, options = {}) {
    const ast = this.produceAbstractSyntaxTree(script, options);
    const final = this.produceRuleGroup(ast);
    return final;
  }

  produceAbstractSyntaxTree(script, options = {}) {
    log('Producing Abstract Syntax Tree');
    const {
      trace
    } = options;
    let parserOptions = {};
    let tracer;

    if (trace === true) {
      tracer = new (pegjs_backtrace__WEBPACK_IMPORTED_MODULE_1___default())(script, {
        showFullPath: true
      });
      parserOptions.tracer = tracer;
    }

    try {
      return this.rawParser.parse(script, parserOptions);
    } catch (err) {
      throw new _Error__WEBPACK_IMPORTED_MODULE_5__.default(err.message, err, tracer);
    }
  }

  produceRuleGroup(ast) {
    log('Producing Rule Group');
    this.validateAst(ast);
    const {
      version,
      body
    } = ast;
    const ruleGroup = new _index__WEBPACK_IMPORTED_MODULE_6__.RuleGroup(version);
    body.forEach(element => {
      try {
        const rule = _index__WEBPACK_IMPORTED_MODULE_6__.Rule.fromLexical(element);

        if (rule) {
          ruleGroup.addRule(rule);
        }
      } catch (err) {
        if (!(err instanceof _Error__WEBPACK_IMPORTED_MODULE_7__.default) || err.severiry === _Common_Constant__WEBPACK_IMPORTED_MODULE_4__.RULE_RESULT_STATUSES.FATAL) {
          throw err;
        }
      }
    });
    return ruleGroup;
  }

  validateAst(ast) {
    if (!ast) {
      throw new _Error__WEBPACK_IMPORTED_MODULE_8__.default(`Abstract syntax tree is empty`, ast);
    }

    const {
      type,
      version
    } = ast;

    if (type !== PARSER_TYPE) {
      throw new _Error__WEBPACK_IMPORTED_MODULE_8__.default(`The AST type should be ${PARSER_TYPE}, but the type for this AST is ${type}`);
    }

    if (!version) {
      ast.version = _Common_Constant__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_SCRIPT_VERSION;
    }

    if (!_Common_Constant__WEBPACK_IMPORTED_MODULE_4__.SUPPORTED_SCRIPT_VERSIONS.filter(item => item === String(version)).length) {
      throw new Parser(`The provided version (${version}) is not supported`);
    }
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "ebccae5ec20d7407fa4a"
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=dicomedit.97b3a6bcc311a9fc3d7e.hot-update.js.map