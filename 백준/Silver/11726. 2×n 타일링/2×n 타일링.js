let fs = require("fs");
let input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

let num = Number(input);
let memo = new Array();

function fibo(num) {
    if (num <= 1) return 1;
    if (num === 2) return 2;
    if (memo[num] !== undefined) return memo[num];
    memo[num] = fibo(num - 1) % 10007 + fibo(num - 2) % 10007;
    return memo[num];
}

console.log(fibo(num) % 10007);