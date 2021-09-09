const expect = require('chai').expect;
const { Anonymizer, RuleGroup, Errors } = require('../dist/node/dicomedit');

const script = `Version 6.3
temp := 'chany'
(0008,0008) := 'test'
(0010,0010) := temp
`;

const ruleGroup = RuleGroup.fromObject({
  rules: [
    {
      statement: {
        type: 'ASSIGN',
        operand1: { type: 'TAG', value: '00080008' },
        operand2: { type: 'TAG', value: '00080020' },
        options: {},
      },
      used: true,
    },
  ],
});

describe('Anonymizer.js', function () {
  let inputFile = 'examples/sample.dcm';

  describe('Instantiating', function () {
    it('should throw error when a script or a rule group is not provided', function () {
      expect(() => {
        new Anonymizer();
      }).to.throw(Errors.IllegalArgumentsError);
    });

    it('should throw error when a script is not valid', function () {
      expect(() => {
        new Anonymizer(`Ver`, { parserLibrary: 'PEGJS' });
      }).to.throw();
    });

    it('should throw error when a rule group is not valid', function () {
      expect(() => {
        new Anonymizer(new Object());
      }).to.throw(Errors.IllegalArgumentsError);
    });

    it('should throw error when identifiers is not a type of object', function () {
      expect(() => {
        new Anonymizer(script, { identifiers: 'illegal identifiers' });
      }).to.throw(Errors.IllegalArgumentsError);
    });

    it('should throw error when lookupMap is not a type of object', function () {
      expect(() => {
        new Anonymizer(script, { lookupMap: 'illegal lookupMap' });
      }).to.throw(Errors.IllegalArgumentsError);
    });

    it('should set a rule group when called with script', function () {
      const anonymizer = new Anonymizer(script);
      expect(anonymizer.ruleGroup).to.be.an.instanceof(RuleGroup);
    });

    it('should set a rule group when called with ruleGroup', function () {
      const anonymizer = new Anonymizer(ruleGroup);
      expect(anonymizer.ruleGroup).to.deep.equal(ruleGroup);
    });

    it('should set initialIdentifiers', function () {
      const identifiers = { test: 'value' };
      const anonymizer = new Anonymizer(script, { identifiers });
      expect(anonymizer).to.have.deep.property('initialIdentifiers', {
        test: 'value',
      });
    });

    it('should set lookupMap', function () {
      const lookupMap = { key: 'value' };
      const anonymizer = new Anonymizer(script, { lookupMap });
      expect(anonymizer).to.have.deep.property('lookupMap', { key: 'value' });
    });

    it('should set namespaceforHashUID', function () {
      const anonymizer = new Anonymizer(script, {
        namespaceforHashUID: 'namespace',
      });
      expect(anonymizer).to.have.deep.property('namespaceforHashUID', 'namespace');
    });
  });

  describe('Loading a DCM', function () {
    let anonymizer = undefined;
    before(function () {
      anonymizer = new Anonymizer(script);
    });

    it('should throw an error when inputBuffer is neither ArrayBuffer type nor Uint8Array type.', function () {
      expect(() => {
        anonymizer.loadDcm(undefined);
      }).to.throw(Errors.IllegalArgumentsError);
    });
  });

  describe('Applying rules', function () {
    let anonymizer = undefined;
    before(function () {
      anonymizer = new Anonymizer(script);
      anonymizer.loadDcmUsingFileName(inputFile);
    });

    it('should ', async function () {
      await anonymizer.applyRules();
    });
  });

  describe('Resolving values', function () {
    it('should ');
  });
});
