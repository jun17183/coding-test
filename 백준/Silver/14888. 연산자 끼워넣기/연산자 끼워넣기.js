const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const numArr = input[1].trim().split(/\s+/).map(Number);
const [plus, minus, multiple, divide] = input[2].trim().split(/\s+/).map(Number);

let max = -1e9;
let min = 1e9;

function dfs(idx, current, p, m, mul, div) {
    if (idx === N) {
        if (current > max) max = current;
        if (current < min) min = current;
        return;
    }

    if (p > 0) dfs(idx + 1, current + numArr[idx], p - 1, m, mul, div);
    if (m > 0) dfs(idx + 1, current - numArr[idx], p, m - 1, mul, div);
    if (mul > 0) dfs(idx + 1, current * numArr[idx], p, m, mul - 1, div);
    if (div > 0) {
        let next = Math.trunc(current / numArr[idx]);
        // -0을 0으로 변환
        if (next === 0) next = 0;
        dfs(idx + 1, next, p, m, mul, div - 1);
    }
}

dfs(1, numArr[0], plus, minus, multiple, divide);
console.log(max);
console.log(min);