const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const stairs = input.slice(1).map(Number);
const dp = [stairs[0], stairs[0] + stairs[1], Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2])];

for (let i = 3; i < N; i++) {
    dp[i] = Math.max(dp[i - 3] + stairs[i - 1] + stairs[i], dp[i - 2] + stairs[i]);
}

console.log(dp[N - 1]);