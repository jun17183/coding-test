let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = Number(input[0]);

let sum = 0;
let i = 0;

while (sum <= input) {
    i++;
    sum += i;    
}

console.log(i - 1);