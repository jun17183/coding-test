const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let index = 1;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[index++].split(" ").map(Number);
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  // 배추 심기
  for (let i = 0; i < K; i++) {
    const [x, y] = input[index++].split(" ").map(Number);
    field[y][x] = 1;
  }

  function dfs(y, x) {
    visited[y][x] = true;
    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];
      if (
        ny >= 0 &&
        ny < N &&
        nx >= 0 &&
        nx < M &&
        field[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        dfs(ny, nx);
      }
    }
  }

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}
