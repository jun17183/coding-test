const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const limits = input[1].split(' ').map(Number).sort((a, b) => a - b);
let weights = input[3].split(' ').map(Number).sort((a, b) => b - a);

function getPossibleWeight(limit, weights) {
    return weights.reduce((acc, cur, idx) => {
        if (cur > limit) return acc;
        if (cur > acc[0]) return [cur, idx];
        return acc;
    }, [-1, -1])[1];
}

function solution() {
    if (weights[0] > limits[N - 1]) return -1;
    let result = 0;

    while (weights.length) {
        for (let i = 0; i < N; i++) {
            const wIdx = getPossibleWeight(limits[i], weights);
            if (wIdx < 0) continue;
            weights = [...weights.slice(0, wIdx), ...weights.slice(wIdx + 1)];
        }
        result++;
    }
    return result;
}

console.log(solution());