const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const map = input.slice(1).map(row => row.split(' ').map(Number));
const visited = Array(N).fill(false);
let result = Infinity;

function dfs(depth, start) {
    if (depth === N / 2) {
        const teamStart = [];
        const teamLink = [];

        for (let i = 0; i < N; i++) {
            if (visited[i]) teamStart.push(i);
            else teamLink.push(i);
        }

        const startStat = getStat(teamStart);
        const linkStat = getStat(teamLink);
        const diff = Math.abs(startStat - linkStat);

        result = Math.min(result, diff);
        return;
    }

    for (let i = start; i < N; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        dfs(depth + 1, i + 1);
        visited[i] = false;
    }
}

function getStat(team) {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = 0; j < team.length; j++) {
            if (i === j) continue;
            sum += map[team[i]][team[j]];
        }
    }
    return sum;
}

dfs(0, 0);
console.log(result);