import fs from 'fs';
import { Modifier } from '../dist/node/dicomedit.js';

const script = `version "6.3"
- (0008,0020)
`;

(async () => {
  try {
    const filename = process.argv[2] || '/Users/woonchan/Desktop/res.dcm';
    const buffer = fs.readFileSync(filename);
    const modifier = new Modifier(buffer);
    console.log(modifier.rawJson.dict['00080020']);
    modifier.setTag('00080020', 'DA', '21000101');
    console.log(modifier.rawJson.dict['00080020']);
    await modifier.anonymize(script);
    console.log(modifier.rawJson.dict['00080020']);
  } catch (err) {
    console.log(err);
  }
})();
