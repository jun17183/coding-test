const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]);

const dp = [1, 3];

for (let i = 2; i <= input; i++) {
    dp[i] = ((dp[i - 1] - dp[i - 2]) * 2 + (dp[i - 2] * 3)) % 9901;
}

console.log(dp[input]);