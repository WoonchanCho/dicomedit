const fs = require('fs');
const path = require('path');
const { performance, PerformanceObserver } = require('perf_hooks');
const { Anonymizer } = require('../dist/node/dicomedit.min');

async function* walk(dir, ext = '.dcm') {
  for await (let d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) {
      yield* walk(entry);
    } else if (d.isFile() && path.extname(entry).toLowerCase() === ext) {
      yield entry;
    }
  }
}

function isDir(path) {
  try {
    var stat = fs.lstatSync(path);
    return stat.isDirectory();
  } catch (e) {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}

async function anonymize(anonymizer, inputFile, outputFile) {
  anonymizer.loadDcmUsingFileName(inputFile);
  await anonymizer.applyRules();
  const buffer = anonymizer.write();
  await fs.promises.mkdir(path.dirname(outputFile), {
    recursive: true,
  });
  fs.writeFileSync(outputFile, new Uint8Array(buffer));
  console.log(`${outputFile} created!!!`);
}

function getOutputFile(inputFile, outputFileOrDir, isInputDir) {
  if (!isInputDir) {
    return outputFileOrDir;
  }

  return path.resolve(outputFileOrDir, path.basename(inputFile));
}

async function exists(fileOrDir) {
  return fs.promises
    .access(fileOrDir, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}

(async () => {
  try {
    if (process.argv.length < 5) {
      console.error(
        '[Usage] node dicom-cli.js [DICOM script path] [file path input DICOM image or a directory] [file path outputt DICOM image or a directory] (PEGJS|ANTLR4)'
      );
      process.exit();
    }

    const scriptFile = process.argv[2];
    const inputFileOrDir = process.argv[3];
    const isInputDir = isDir(inputFileOrDir);
    const outputFileOrDir = process.argv[4];

    if (
      isInputDir &&
      (await exists(outputFileOrDir)) &&
      !isDir(outputFileOrDir)
    ) {
      console.error('Output should be a directory');
      process.exit();
    }

    const parserLibrary =
      process.argv.length >= 6 ? process.argv[5].toUpperCase() : 'ANTLR4';
    const script = fs.readFileSync(scriptFile, 'utf8');

    const anonymizer = new Anonymizer(script, { parserLibrary });

    if (!isInputDir) {
      await anonymize(
        anonymizer,
        inputFileOrDir,
        getOutputFile(inputFileOrDir, outputFileOrDir, isInputDir)
      );
    } else {
      if (!(await exists(outputFileOrDir))) {
        fs.mkdirSync(outputFileOrDir);
      }
      for await (let elem of walk(inputFileOrDir)) {
        try {
          const outputFile = path.resolve(
            outputFileOrDir,
            elem.substring(inputFileOrDir.length + 1)
          );
          console.log(`Processing ${elem}`);
          await anonymize(anonymizer, elem, outputFile);
        } catch (err) {
          console.log(elem, err);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
})();
