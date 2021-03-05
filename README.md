# DicomEdit.js

`DicomEdit.js` is a JavaScript library that provides the ability to read DICOM objects, transform their contents based on a scripted list of commands, and to output the transformed DICOM.

DicomEdit.js is a ported version the original Java-based library (https://wiki.xnat.org/xnat-tools/dicomedit) to work with a web-browser and Node.Js environments. This can add more safety to data privacy by allowing DICOM objects to be anonymized in users's local environment before being transferred to Server to make sure any PHI is not sent to unsecure/secure network.

DicomEdit.js uses a parser library (either Antlr4 or Peg.js (https://github.com/pegjs)) to create a parser for the DicomEdit script. Using the parser, the incoming script is converted to the abstract syntax tree, and finally the AST is transformed into the Rule groups object. and each defined rule is sequentially applied to the DICOM object.

## Demo
This is a sample React.Js based webapp that demonstrates how the DicomEdit.js library works: https://testanonymizer.web.app.

## Install
DicomEdit.js is available from npm or unpkg.
```javascript
npm install dicomedit
```
```javascript
yarn add dicomedit
```
```html
<script src="https://unpkg.com/dicomedit/dist/web/dicomedit.js"></script>
```

## API Documentation
To be added

## Usage

### Browser or Electron with HTML
```html
<script src="https://unpkg.com/dicomedit@0.0.9/dist/web/dicomedit.min.js"></script>
<script>
const script = `version "6.3"
temp := "chany"
(0008,0008) := "test"
(0010,0010) := temp
`;

(async () => {
    // Assuming that a variable named 'buffer' is declared and ArrayBuffer type of the dcm image is assigned to the variable. (Please refer to https://github.com/WoonchanCho/dicomedit/blob/master/examples/web-example.html for the ArrayBuffer assignment. )
    const { Anonymizer } = DicomEdit;
    const anonymizer = new Anonymizer(script);
    anonymizer.loadDcm(buffer)
    await anonymizer.applyRules();

    console.log(anonymizer.outputDict)
    buffer = anonymizer.write()
    console.log(buffer)
})();

</script>
```

#### Node.js with the CommonJS module system
```javascript
const fs = require('fs');
const { Anonymizer } = require('dicomedit/dist/node/dicomedit.min');

const script = `version "6.3"
temp := "chany"
(0008,0008) := "test"
(0010,0010) := temp
`;

(async () => {
  try {
    const anonymizer = new Anonymizer(script);

    const inputFile = process.argv[2] || './sample.dcm';
    anonymizer.loadDcmUsingFileName(inputFile);
    await anonymizer.applyRules();

    const buffer = anonymizer.write();
    const outputFile = process.argv[3] || './anon.dcm';
    fs.writeFileSync(outputFile, new Uint8Array(buffer));
  } catch (err) {
    console.log(err);
  }
})();

```

## License

MIT