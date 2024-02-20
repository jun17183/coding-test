let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
let temp = input[0].split("-");

for (let i = 0; i < temp.length; i++) {
    temp[i].split("+").forEach(num => {
        if (i === 0) {
            answer += +num;
        } else {
            answer -= +num;
        }
    });
}

console.log(answer);