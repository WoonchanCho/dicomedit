import { Dictionary } from '../dist/node/dicomedit.js';

const script = `version "6.3"
- (0008,0020)
`;

(async () => {
  console.log(Dictionary.retrieveName('000800018'));
})();
