const fs = require('fs');
const { Anonymizer } = require('../dist/node/dicomedit.min');

(async () => {
  try {
    if (process.argv.length < 5) {
      console.error(
        '[Usage] node dicom-cli.js [DICOM script path] [input DICOM image path] [output DICOM image path]'
      );
      process.exit();
    }

    const scriptFile = process.argv[2];
    const inputFile = process.argv[3];
    const outputFile = process.argv[4];
    const script = fs.readFileSync(scriptFile, 'utf8');

    const anonymizer = new Anonymizer(script);
    anonymizer.loadDcmUsingFileName(inputFile);
    await anonymizer.applyRules();
    const buffer = anonymizer.write();
    fs.writeFileSync(outputFile, new Uint8Array(buffer));
    console.log(`${outputFile} created!!!`);
  } catch (err) {
    console.log(err);
  }
})();
