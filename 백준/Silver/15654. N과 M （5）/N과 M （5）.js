const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const visited = input[1].split(' ').map(n => [Number(n), false]).sort((a, b) => a[0] - b[0]);
const output = [];
const answer = [];

function dfs(depth) {
  if (depth === M) {
    answer.push(output.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i][1]) continue;

    output.push(visited[i][0]);
    visited[i][1] = true;

    dfs(depth + 1);

    output.pop();
    visited[i][1] = false;
  }
}

dfs(0);

console.log(answer.join('\n'));