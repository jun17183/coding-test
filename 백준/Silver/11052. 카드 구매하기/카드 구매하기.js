const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const prices = [0, ...input[1].split(' ').map(Number)];
const dp = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i], dp[i - j] + prices[j]);
    }
}

console.log(dp[N]);
