const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);
const visited = Array(N).fill(false);
const result = [];
let max = -101;

function cal(arr) {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result += Math.abs(arr[i] - arr[i + 1]);
  }
  return result;
}

function dfs(depth) {
  if (depth === N) {
    max = Math.max(max, cal(result));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    result.push(A[i]);
    visited[i] = true;

    dfs(depth + 1);

    result.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(max);