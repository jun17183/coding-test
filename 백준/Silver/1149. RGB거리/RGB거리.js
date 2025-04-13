const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dp = [[0, 0, 0]];

for (let i = 1; i < input.length; i++) {
  const cost = input[i].split(' ').map(Number);

  const before = dp[dp.length - 1];
  const now = [0, 0, 0];

  now[0] = Math.min(before[1], before[2]) + cost[0];
  now[1] = Math.min(before[0], before[2]) + cost[1];
  now[2] = Math.min(before[0], before[1]) + cost[2];

  dp.push(now);
}

console.log(Math.min(...dp[dp.length - 1]));