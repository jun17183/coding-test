let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
let sum = 0;
let arr = input[1].split(" ").sort((a, b) => Number(a) - Number(b));

for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    answer += sum;
}

console.log(answer);