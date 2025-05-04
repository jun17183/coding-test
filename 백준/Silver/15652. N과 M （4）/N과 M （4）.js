const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const output = [];
const answer = [];

function dfs(depth, start) {
  if (depth === M) {
    answer.push(output.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    output.push(i);
    dfs(depth + 1, i);
    output.pop();
  }
}

dfs(0, 1);

console.log(answer.join('\n'));