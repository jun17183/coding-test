const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input.length; i += 2) {
    const N = Number(input[i]);
    const permutation = [0, ...(input[i + 1].split(' ').map(Number))];
    let result = 0;

    function dfs(num) {
        const idx = permutation.indexOf(num);

        if (idx === -1) return;

        permutation[idx] = N + 1;
        dfs(idx);
    }

    for (let j = 1; j < permutation.length; j++) {
        if (permutation[j] > N) continue; 
        dfs(permutation[j]);
        result++;
    }

    console.log(result);
}
