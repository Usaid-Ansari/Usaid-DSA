const { spawn } = require('child_process');
const path = require('path');

const cases = [
  { input: '5 3 1', expected: 'num1 is greater' },
  { input: '2 7 4', expected: 'num2 is gretaer' },
  { input: '4 4 6', expected: 'num3 is greater' },
  { input: '4 4 4', expected: 'All number is equal' },
  { input: '10 5 20', expected: 'num1 is greater' },
  { input: '0 0 -1', expected: 'All number is equal' },
  { input: '-2 -5 -1', expected: 'num1 is greater' },
  { input: '3 3 3.0', expected: 'All number is equal' },
  { input: '1000000000 999999999 1000000001', expected: 'num1 is greater' },
  { input: '7 7 6', expected: 'All number is equal' }
];

const scriptDir = __dirname;

function runCase(testCase) {
  return new Promise((resolve) => {
    const proc = spawn('node', ['threenum.js'], { cwd: scriptDir });
    let out = '';

    proc.stdout.on('data', (d) => (out += d.toString()));
    proc.stderr.on('data', (d) => (out += d.toString()));

    proc.on('close', () => {
      const lines = out
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean);
      let resultLine =
        lines.find((l) => /num1|num2|num3|All number|All number is equal/i.test(l)) ||
        lines[lines.length - 1] ||
        '';

      resultLine = resultLine.replace(/^Enter.*?:\s*/i, '').trim();

      const pass = resultLine === testCase.expected;
      resolve({ pass, output: resultLine });
    });

    proc.stdin.write(testCase.input + '\n');
    proc.stdin.end();
  });
}

(async () => {
  let failures = 0;
  for (let i = 0; i < cases.length; i++) {
    const t = cases[i];
    const res = await runCase(t);
    const status = res.pass ? 'PASS' : 'FAIL';
    console.log(
      `Case ${i + 1}: ${status} — input: "${t.input}" — expected: "${t.expected}" — got: "${res.output}"`
    );
    if (!res.pass) failures++;
  }

  if (failures) {
    console.log(`${failures} test(s) failed`);
    process.exit(1);
  } else {
    console.log('All tests passed');
    process.exit(0);
  }
})();
