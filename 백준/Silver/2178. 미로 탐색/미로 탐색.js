const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const miro = input.slice(1).map(row => row.trim().split('').map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function bfs() {
    const queue = [[0, 0]];

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

            if (miro[nx][ny] !== 1) continue;
            miro[nx][ny] = miro[x][y] + 1;
            queue.push([nx, ny]);
        }
    }

    return miro[N - 1][M - 1];
}

console.log(bfs());