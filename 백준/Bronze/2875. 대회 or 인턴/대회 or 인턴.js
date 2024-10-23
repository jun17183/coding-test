let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m, k] = input[0].split(' ').map(Number);
let answer = 0;

while (n >= 2 && m >= 1 && n + m - 3 >= k) {
  n -= 2;
  m--;
  answer++;
}

console.log(answer);