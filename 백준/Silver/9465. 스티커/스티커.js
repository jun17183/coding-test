const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input.length; i += 3) {
  const n = Number(input[i]);
  const first = input[i + 1].split(' ').map(Number);
  const second = input[i + 2].split(' ').map(Number);

  const dp = [Array(n).fill(0), Array(n).fill(0)];

  for (let j = 0; j < n; j++) {
    if (j === 0) {
      dp[0][j] = first[j];
      dp[1][j] = second[j];
      continue;
    }

    dp[0][j] = Math.max(dp[0][j - 1], dp[1][j - 1] + first[j]);
    dp[1][j] = Math.max(dp[1][j - 1], dp[0][j - 1] + second[j]);
  }

  console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
}