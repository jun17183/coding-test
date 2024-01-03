let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let num = 0;
    let sum = 0;

    while (sum <= Number(input)) {
        num++;
        sum += num;
    }

    console.log(num - 1);
}

solution(input);