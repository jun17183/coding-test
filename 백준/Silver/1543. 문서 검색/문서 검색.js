const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const doc = input[0];
const word = input[1];

let count = 0;
let i = 0;

while (i <= doc.length - word.length) {
    if (doc.substring(i, i + word.length) === word) {
        count++;
        i += word.length;
    } else {
        i++;
    }
}

console.log(count);