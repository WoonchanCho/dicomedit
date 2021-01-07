const fs = require('fs');
const { Anonymizer } = require('../dist/node/dicomedit');

const script = `Version 6.3
temp := 'chany'
(0008,0008) := 'test'
(0010,0010) := temp
`;

(async () => {
  try {
    const anonymizer = new Anonymizer(script, { test: 'hello' });

    const inputFile = process.argv[2] || './sample.dcm';
    anonymizer.loadDcmUsingFileName(inputFile);
    await anonymizer.applyRules();
    // console.log('result', dicomEdit.ruleResult.results);

    const buffer = anonymizer.write();
    const outputFile = process.argv[3] || './anon.dcm';
    fs.writeFileSync(outputFile, new Uint8Array(buffer));
    console.log(`${outputFile} created!!!`);
  } catch (err) {
    console.log(err);
  }
})();
