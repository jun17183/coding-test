let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
let money = Number(input[0].split(" ")[1]);

for (let i = input.length - 1; i > 0; i--) {
    let coin = Number(input[i]);
    if (coin > money) continue;

    answer += Math.floor(money / coin);
    
    let rest = money % coin;
    if (rest === 0) break;

    money = rest;
}

console.log(answer);