const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for (let line of input) {
  let arr = line.split(' ').map(Number);
  let k = arr[0];
  if (k === 0) break;

  let s = arr.slice(1);
  let picked = [];

  const dfs = (start, depth) => {
    if (depth === 6) {
      result.push(picked.join(' '));
      return;
    }

    for (let i = start; i < k; i++) {
      picked.push(s[i]);
      dfs(i + 1, depth + 1);
      picked.pop();
    }
  };

  dfs(0, 0);
  result.push('');
}

console.log(result.join('\n'));