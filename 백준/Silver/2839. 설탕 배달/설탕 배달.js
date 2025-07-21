let fs = require("fs");
let input = +(fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0]);

let answer = -1;

for (let i = parseInt(input / 5); i >= 0; i--) {
    let l = input - i * 5;
    if (l % 3 === 0) {
        answer = l / 3;
        answer += i;
        break;
    }
}

console.log(answer);