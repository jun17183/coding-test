const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const timeTable = input.slice(1).map(item => item.split(' ').map(Number)).sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});

let answer = 1;
let e = timeTable[0][1];

for (let i = 1; i < timeTable.length; i++) {
    if (timeTable[i][0] >= e) {
        e = timeTable[i][1];
        answer++;
    }
}

console.log(answer);