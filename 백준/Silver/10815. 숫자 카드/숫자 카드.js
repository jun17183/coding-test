const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0]
const M = +input[2];
const nArr = input[1].split(' ').map(Number).sort((a, b) => b - a);
const mArr = input[3].split(' ').map((card, idx) => [Number(card), idx]).sort((a, b) => b[0] - a[0]);

const result = Array(M).fill(0);

while (mArr.length) {
    const [num, idx] = mArr.pop();
    let card = num + 1;

    while (nArr.length && nArr[nArr.length - 1] <= num) {
        card = nArr.pop();
    }

    if (card === num) result[idx] = 1;
}

console.log(result.join(' '));