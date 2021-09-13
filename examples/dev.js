const fs = require('fs');
const {
  Anonymizer,
  RuleGroup,
  Rule,
  Statement,
  Element,
  Expression,
  STATEMENT_TYPES,
  ELEMENT_TYPES,
  EXPRESSION_FUNCTIONS,
  Parser,
} = require('../dist/node/dicomedit');

const dcmjs = require('dcmjs/build/dcmjs');
const {
  data: { DicomMessage, PixelModifier },
} = dcmjs;

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
                new Expression(EXPRESSION_FUNCTIONS.replace, 'fsfsdfsdf', 'f', '=')
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
          new Expression(EXPRESSION_FUNCTIONS.format, '{0}_{1}_{2}', 'a', 'b', 0)
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
// - (2050,0020)
delete["(0099,0010)"]
// project != "Unassigned" ? (0008,1030) := project
// alterPixels["rectangle", "l=0, t=0, r=1000, b=1000", "solid", "v=100"]
// - (0008,0008)
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
`;

const script2 = `version "6.3"
(0008,1030) := "afzfZ"
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
    // console.log(ruleGroup3.rules[0].statement.operand1.value);

    // console.log(ruleGroup3.rules[0].statement);

    let anonymizer = new Anonymizer(ruleGroup3, {
      identifiers: { chany: 'aaa2332', project: 'Unassigned' },
      lookupMap: { 'pid/NOID': 'fsdafsd' },
    });

    const filename =
      process.argv[2] ||
      //   '/Users/woonchan/Documents/sample/scans/73200000-MG1_R CC Breast Tomosynthesis Image/secondary/1.2.840.113654.2.45.6243.119412621788088078345724757077254776278-73200000-117-11bjar2.dcm';
      //   '/Users/woonchan/Desktop/sample-tomo.dcm';
      '/Users/woonchan/Desktop/TS_Set/MR-MONO2-12-shoulder';
    const buffer2 = fs.readFileSync(filename);

    anonymizer.loadDcm(buffer2);
    // console.log(anonymizer.inputDict.dict['7FE00010']);
    // console.log(anonymizer.inputDict);
    await anonymizer.applyRules();
    // const ssi = new Uint8Array(anonymizer.outputDict.dict['7FE00010'].Value[0]);
    // console.log(ssi.filter((p) => p).length);
    // console.log(anonymizer.inputDict === anonymizer.outputDict);
    const buffer = anonymizer.write();

    // const dicomDict = DicomMessage.readFile(buffer2.buffer);
    // const pixelModifier = new PixelModifier(dicomDict);
    // pixelModifier.draw('rectangle', { left: 0, top: 0, right: 1500, bottom: 1500 });
    // const buffer = dicomDict.write();
    // const ssi = new Uint8Array(dicomDict.dict['7FE00010'].Value[0]);
    // console.log(pixelModifier.getSizeOfImage());
    // console.log(ssi.filter((p) => p).length);

    fs.writeFileSync('/Users/woonchan/Desktop/res.dcm', new Uint8Array(buffer));
    // console.log(anonymizer.identifiers);
    // console.log(anonymizer.match(new TagLiteral('0019{HOLOGIC, Inc.}X@')));
    // console.log(anonymizer.match(new TagLiteral('00190010')));

    // console.log(anonymizer.inputDict.dict['7FE00010']);
    // console.log(loader);
  } catch (err) {
    console.log(err);
  }
})();
