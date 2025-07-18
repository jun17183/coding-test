const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]);

const arr = [-1, 0, 1, 1];
                
for (let i = 4; i <= input; i++) {
    let a = i % 3 === 0 ? arr[i / 3] + 1 : input;
    let b = i % 2 === 0 ? arr[i / 2] + 1 : input;
    let c = arr[i - 1] + 1;
    
    arr[i] = Math.min(a, b, c);
}

console.log(arr[input]);