const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [-1, 1, 2, 4];

for (let i = 1; i < input.length; i++) {
    const num = Number(input[i]);
    
    if (num < 4) {
        console.log(arr[num]);
        continue;
    }
    
    for (let j = arr.length; j <= num; j++) {
        arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
    }
    
    console.log(arr[num]);
}