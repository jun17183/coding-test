const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const kits = input[1].split(' ').map(Number);

const visited = Array(N).fill(false);
let answer = 0;

function dfs(day, muscle) {
    if (day === N) {
        answer++;
        return;
    }

    for (let i = 0; i < kits.length; i++) {
        if (visited[i]) continue;

        const nextMuscle = muscle + kits[i] - K;
        if (nextMuscle < 500) continue;

        visited[i] = true;
        dfs(day + 1, nextMuscle);
        visited[i] = false;
    }
}

dfs(0, 500);
console.log(answer);