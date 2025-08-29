const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const map = input.slice(1).map(row => row.trim().split('').map(Number));

let result = 0;
const counts = [];

const solution = (i, j, cnt) => {
    if (map[i][j] === 0) return cnt;
    map[i][j] = 0;
    cnt++;
    
    if (i > 0) cnt = solution(i - 1, j, cnt);
    if (j > 0) cnt = solution(i, j - 1, cnt);
    if (i < N - 1) cnt = solution (i + 1, j, cnt);
    if (j < N - 1) cnt = solution (i, j + 1, cnt);

    return cnt;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 0) continue;
        counts.push(solution(i, j, 0));
        result++;
    }
}

console.log(result);
console.log(counts.sort((a, b) => a - b).join('\n'));