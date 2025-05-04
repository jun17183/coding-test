const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const visited = Array(N + 1).fill(false);
const output = [];

function dfs(depth) {
  if (depth === M) {
    console.log(output.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    output.push(i);
    visited[i] = true;
    
    dfs(depth + 1);
    
    output.pop();
    visited[i] = false;
  }
}

dfs(0);