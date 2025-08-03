const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

const MOD = 10007;
const N = input;

const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

for (let j = 0; j <= 9; j++) {
  dp[1][j] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = j; k <= 9; k++) {
      dp[i][j] = (dp[i][j] + dp[i - 1][k]) % MOD;
    }
  }
}

let answer = 0;
for (let j = 0; j <= 9; j++) {
  answer = (answer + dp[N][j]) % MOD;
}

console.log(answer);
