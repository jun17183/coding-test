const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numArr = input[1].split(' ').map(Number);
const cases = input.slice(2).map(c => c.split(' ').map(Number));

const dp = [0];

for (let i = 0; i < N; i++) {
    dp[i + 1] = numArr[i] + dp[i];
}

const answer = [];

for (let [s, e] of cases) {
    answer.push(dp[e] - dp[s - 1]);
}

console.log(answer.join('\n'));