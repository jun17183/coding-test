const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dp = [0, 1, 2, 4];
const result = [];



for (let i = 1; i < input.length; i++) {
  const t = Number(input[i]);

  if (dp.length > t) {
    result.push(dp[t]);
    continue;
  }

  for (let j = dp.length; j <= t; j++) {
    dp.push((dp[j - 3] + dp[j - 2] + dp[j - 1]) % 1000000009);
  }

  result.push(dp[dp.length - 1]);
}

console.log(result.join('\n'));