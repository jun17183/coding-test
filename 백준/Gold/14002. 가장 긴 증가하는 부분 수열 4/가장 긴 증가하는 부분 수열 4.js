const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const A = input[1].split(' ').map(Number);
const dp = Array(n).fill(1);
const indexArr = Array(n).fill(-1);

for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (A[j] >= A[i]) continue;
        if (dp[j] + 1 > dp[i]) {
            dp[i] = dp[j] + 1;
            indexArr[i] = j;
        }
    }
}

const max = Math.max(...dp);
const result = Array(max).fill(-1);
let index = dp.indexOf(max);

for (let i = max - 1; i >= 0; i--) {
    result[i] = A[index];
    index = indexArr[index];
}

console.log(max);
console.log(result.join(' '));