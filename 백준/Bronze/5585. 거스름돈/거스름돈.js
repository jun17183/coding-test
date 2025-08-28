const fs = require('fs');
let input = 1000 - Number(fs.readFileSync('dev/stdin').toString().trim().split('\n')[0]);

let result = 0;

result += Math.floor(input / 500);
input = input % 500;

result += Math.floor(input / 100);
input = input % 100;

result += Math.floor(input / 50);
input = input % 50;

result += Math.floor(input / 10);
input = input % 10;

result += Math.floor(input / 5);
input = input % 5;

result += Math.floor(input / 1);

console.log(result);