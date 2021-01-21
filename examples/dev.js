import fs from 'fs';
import Anonymizer, {
  RuleGroup,
  Rule,
  Statement,
  Element,
  Expression,
  STATEMENT_TYPES,
  ELEMENT_TYPES,
  EXPRESSION_FUNCTIONS,
  Parser,
} from '../dist/node/dicomedit.js';

const ruleGroup2 = RuleGroup.fromObject({
  rules: [
    // {
    //   statement: {
    //     type: 'PROCEDURE',
    //     operand1: {
    //       type: 'EXPRESSION',
    //       value: {
    //         funcName: 'getURL',
    //         args: ['https://jsonplaceholder.typicode.com/todos/1', 'title'],
    //       },
    //     },
    //     options: {},
    //   },
    //   used: true,
    // },
    {
      statement: {
        type: 'ASSIGN',
        operand1: { type: 'TAG', value: '00080008' },
        operand2: { type: 'TAG', value: '00080020' },
        options: {},
      },
      used: true,
    },
    {
      statement: {
        type: 'ASSIGN',
        operand1: { type: 'IDENTIFIER', value: 'a00080008' },
        operand2: {
          type: 'EXPRESSION',
          value: {
            funcName: 'lowercase',
            args: [
              {
                funcName: 'concatenate',
                args: [
                  {
                    funcName: 'replace',
                    args: ['fsfsdfsdf', 'f', '='],
                  },
                ],
              },
            ],
          },
        },
        options: { runsIfExists: true },
      },
      used: true,
    },
    {
      statement: {
        type: 'ASSIGN',
        operand1: { type: 'TAG', value: '00080020' },
        operand2: {
          type: 'EXPRESSION',
          value: {
            funcName: 'shiftDateByIncrement',
            args: [{ type: 'TAG', value: '00080020' }, 10],
          },
        },
        options: {},
      },
      used: true,
    },
    {
      statement: {
        type: 'ASSIGN',
        operand1: { type: 'TAG', value: '00080009' },
        operand2: {
          type: 'EXPRESSION',
          value: {
            funcName: 'uppercase',
            args: [{ funcName: 'format', args: ['{0}_{1}_{2}', 'a', 'b', 0] }],
          },
        },
        options: { runsIfExists: true },
      },
      used: true,
    },
    // {
    //   statement: {
    //     type: 'ASSIGN',
    //     operand1: { type: 'TAG', value: '00080008' },
    //     operand2: {
    //       type: 'EXPRESSION',
    //       value: {
    //         funcName: 'uppercase',
    //         args: [
    //           {
    //             funcName: 'format',
    //             args: [
    //               '{0}_{1}_{2}',
    //               { type: 'TAG', value: '00080020' },
    //               'b',
    //               0,
    //             ],
    //           },
    //         ],
    //       },
    //     },
    //     options: { runsIfExists: true },
    //   },
    //   used: true,
    // },
  ],
  version: '6.3',
});
const ruleGroup = new RuleGroup('6.3', [
  new Rule(
    new Statement(
      STATEMENT_TYPES.PROCEDURE,
      new Element(
        ELEMENT_TYPES.EXPRESSION,
        new Expression(
          EXPRESSION_FUNCTIONS.getURL,
          'https://jsonplaceholder.typicode.com/todos/1',
          'title'
        )
      )
    )
  ),
  new Rule(
    new Statement(
      STATEMENT_TYPES.ASSIGN,
      new Element(ELEMENT_TYPES.TAG, '00080008'),
      new Element(ELEMENT_TYPES.TAG, '00080020')
    )
  ),
  new Rule(
    new Statement(
      STATEMENT_TYPES.ASSIGN,
      new Element(ELEMENT_TYPES.TAG, '00080008'),
      new Element(
        ELEMENT_TYPES.EXPRESSION,
        new Expression(
          EXPRESSION_FUNCTIONS.lowercase,
          new Expression(
            EXPRESSION_FUNCTIONS.lowercase,

            new Expression(
              EXPRESSION_FUNCTIONS.concatenate,
              new Element(
                ELEMENT_TYPES.EXPRESSION,
                new Expression(
                  EXPRESSION_FUNCTIONS.replace,
                  'fsfsdfsdf',
                  'f',
                  '='
                )
              )
            )
          )
        )
      ),
      { runsIfExists: true }
    )
  ),
  new Rule(
    new Statement(
      STATEMENT_TYPES.ASSIGN,
      new Element(ELEMENT_TYPES.TAG, '00080020'),
      new Element(
        ELEMENT_TYPES.EXPRESSION,
        new Expression(
          EXPRESSION_FUNCTIONS.shiftDateByIncrement,
          new Element(ELEMENT_TYPES.TAG, '00080020'),
          10
        )
      )
    )
  ),
  new Rule(
    new Statement(
      STATEMENT_TYPES.ASSIGN,
      new Element(ELEMENT_TYPES.TAG, '00080009'),
      new Element(
        ELEMENT_TYPES.EXPRESSION,
        new Expression(
          EXPRESSION_FUNCTIONS.uppercase,
          new Expression(
            EXPRESSION_FUNCTIONS.format,
            '{0}_{1}_{2}',
            'a',
            'b',
            0
          )
        )
      ),
      { runsIfExists: true }
    )
  ),
  new Rule(
    new Statement(
      STATEMENT_TYPES.ASSIGN,
      new Element(ELEMENT_TYPES.TAG, '00080009'),
      new Element(
        ELEMENT_TYPES.EXPRESSION,
        new Expression(
          EXPRESSION_FUNCTIONS.uppercase,
          new Expression(
            EXPRESSION_FUNCTIONS.format,
            '{0}_{1}_{2}',
            new Element(ELEMENT_TYPES.TAG, '00080020'),
            'b',
            0
          )
        )
      ),
      { runsIfExists: true }
    )
  ),
]);

ruleGroup && ruleGroup2;
const script = `version "6.3"
- (0008,0008)
// (0008,0008) := "HOLOGIC, Inc."
// - (0019,{HOLOGIC, Inc.}X@)/(0001,0022)
// - (0020,9222)/(0020,XXX#)
// (0001,0022) := 'FAST'
// (0020,0011) = "99" ? (0008,103E) := "Series One" : (0008,103E) := (0019,0010)
// removeAllPrivateTags
// set["(0008,0008)", "fubar"]
// echo format["Study Description '{0}' -> '{1}'", (0008,1030), 'saffs']
// echo '111','333',chany, format["Study Description '{0}' -> '{1}'", (0008,0009), 'saffs']
// retainPrivateTags[ "(0019,{HOLOGIC, Inc.}06)", "(0029,{SIEMENS MEDCOM HEADER2}XX)"]
// (0010,0020) := lookup[ "pid", (0010,0020)]
// describe visurl hidden
// default_series_description := "ds"
// (0020,0011) = "99" ? (0008,103E) := "Series Two" : (0008,103E) := default_series_description
// (0008,0050) !~ "[1-5]" ? aaa :=2 : -(0020,0008)
// shiftDateTimeSequenceByIncrement[ "1220400", "(5200,9230)/(0020,9111)/(0018,9151)"]
// (0008,0018) := hashUID['aaa']
// (0008,002A) := shiftDateTimeByIncrement[ (0008,002A), "1220400"]
// alterPixels["rectangle", "l=100, t=100, r=200, b=200", "solid", "v=100"]
`;

// const script = `Version 6.3
// // (0008,0050) :=  '20'
// // a := (0008,1115)/(0008,114a)/(0008,1150)
// // a := (0008,1115)/(0008,114a)

// - (0029,{SIEMENS MEDCOM HEADER2}XX);
// // (0029,{SIEMENS MEDCOM HEADER2}XX) ~ "\d" ? (0029,{SIEMENS MEDCOM HEADER2}XX) :=2 : a=2
// // - (0029,{SIEMENS MEDCOM HEADER2}XX)
// // default_series_description := "Some other series"
// // (0020,0011) = "1" ? (0008,103E) := "Series One" : (0008,103E) := default_series_description
// // (0020,0011) = "2" ? (0008,103E) := "Series Two" : (0008,103E) := default_series_description
// // alterPixels["rectangle", "l=100, t=100, r=200, b=200", "solid", "v=100"]
// // (0010,0010) := lookup[ "pn", (0010,0010)]
// // (0010,0020) := lookup[ "pid", (0010,0020)]
// // retainPrivateTags[ "(0029,{SIEMENS MEDCOM HEADER2}XX)"]
// // set["(0009,1010)", "fubar"]
// // // shift per-frame-functional-groups-sequence/frame-content-sequence/frame-acquisition-datetime by 14 days and 3 hours (1220400 seconds)
// // shiftDateTimeSequenceByIncrement[ "1220400", "(5200,9230)/(0020,9111)/(0018,9151)"]
// // patientID := (0010,0020)
// // echo format["Study Description '{0}' -> '{1}'", (0008,1030), studyDesc]
// // describe visurl hidden
// // removeAllPrivateTags
// // (1,1) := 1
// // (5200,9230)/(0020,9111)/(0018,9151) = 1
// `;

(async () => {
  try {
    // const anonymizer = new Anonymizer(ruleGroup2, { chany: 'aaa' });
    // const filename = process.argv[2] || '/Users/woonchan/Desktop/download.dcm';
    // const arrayBuffer = fs.readFileSync(filename);
    // anonymizer.loadDcm(arrayBuffer);
    // anonymizer.loadDcmUsingFileName(filename);
    // await anonymizer.applyRules();
    // console.log('result', anonymizer.ruleResult.results);
    // const buffer = anonymizer.write();
    // fs.writeFileSync('/Users/woonchan/Desktop/res.dcm', new Uint8Array(buffer));
    const parser = Parser.generateParser();
    const ruleGroup3 = parser.parse(script, { trace: true });
    console.log(ruleGroup3.rules[0]);

    const anonymizer = new Anonymizer(
      ruleGroup3,
      { chany: 'aaa2332' },
      { 'pid/NOID': 'fsdafsd' },
      undefined
    );
    const filename = process.argv[2] || '/Users/woonchan/Desktop/res.dcm';
    const buffer2 = fs.readFileSync(filename);
    anonymizer.loadDcm(buffer2);
    // console.log(anonymizer.privateTagMap);
    await anonymizer.applyRules();
    // console.log('result', anonymizer.ruleResult.results);
    const buffer = anonymizer.write();
    fs.writeFileSync('/Users/woonchan/Desktop/res.dcm', new Uint8Array(buffer));
    console.log(anonymizer.identifiers);
    // console.log(anonymizer.match(new TagLiteral('0019{HOLOGIC, Inc.}X@')));
    // console.log(anonymizer.match(new TagLiteral('00190010')));
  } catch (err) {
    console.log(err);
  }
})();
