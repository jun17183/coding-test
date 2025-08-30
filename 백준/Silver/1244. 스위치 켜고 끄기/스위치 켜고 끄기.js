const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const M = +input[2];
const switches = [-1, ...input[1].split(' ').map(Number)];
const cases = input.slice(3).map(c => c.split(' ').map(Number));

for (let [s, n] of cases) {
    if (s === 1) {
        for (let i = n; i <= N; i += n) {
            switches[i] = switches[i] === 1 ? 0 : 1;
        }
    } else {
        switches[n] = switches[n] === 1 ? 0 : 1;
        
        for (let i = 1; n - i > 0 && n + i <= N; i++) {
            if (switches[n - i] === switches[n + i]) {
                switches[n - i] = switches[n - i] === 1 ? 0 : 1;
                switches[n + i] = switches[n + i] === 1 ? 0 : 1;
            } else {
                break;
            }
        }
    }
}

const result = switches.slice(1);
for (let i = 0; i < result.length; i += 20) {
    console.log(result.slice(i, i + 20).join(' '));
}