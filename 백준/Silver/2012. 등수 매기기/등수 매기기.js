const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const arr = input.slice(1).map(Number).sort((a, b) => a - b);

let result = 0;

arr.map((item, idx) => {
    result += Math.abs((idx + 1) - item);
});

console.log(result);