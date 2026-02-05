const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
  let n = parseInt(answer);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum++;
      console.log(i);
    }
  }
  console.log(sum);
  rl.close();
});
