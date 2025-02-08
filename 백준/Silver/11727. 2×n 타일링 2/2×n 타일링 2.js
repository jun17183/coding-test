const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]);

let arr = [-1, 1, 3];

for (let i = 3; i <= input; i++) {
    arr[i] = (arr[i - 1] + 2 * arr[i - 2]) % 10007;
}

console.log(arr[input]);