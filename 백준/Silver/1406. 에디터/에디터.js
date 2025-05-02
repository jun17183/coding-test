const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const left = input[0].split('');
const right = [];
const cmdArr = input.slice(2);

cmdArr.forEach(cmd => {
    switch (cmd) {
        case 'L':
            if (left.length) right.push(left.pop());
            break;
        case 'D':
            if (right.length) left.push(right.pop());
            break;
        case 'B':
            left.pop();
            break;
        default:
            left.push(cmd.split(' ')[1]);
            break;
    }
});

while (right.length > 0) left.push(right.pop());

console.log(left.join(''));