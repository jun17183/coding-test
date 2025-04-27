const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const wines = input.slice(1).map(Number);
const dp = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  if (i === 0) {
    dp[i] = wines[i];
    continue;
  }

  if (i === 1) {
    dp[i] = wines[i] + wines[i - 1];
    continue;
  }

  if (i === 2) {
    dp[i] = Math.max(
        wines[i] + wines[i - 1],
        wines[i] + wines[i - 2], 
        wines[i - 1] + wines[i - 2]
    );
    continue;
  }

  dp[i] = Math.max(
      wines[i] + wines[i - 1] + dp[i - 3], 
      wines[i] + dp[i - 2], 
      dp[i - 1]
  );
}

console.log(Math.max(...dp));