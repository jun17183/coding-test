let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let prev = input[1][0];
let blue = 0;
let red = 0;

for (let i = 1; i < input[1].length; i++) {
  let now = input[1][i];
  if (now !== prev) {
    if (prev === 'B') blue++;
    else red++;
  }
  prev = now;

  if (i === input[1].length - 1) {
    if (now === 'B') blue++;
    else red++;
  }
}

console.log(Math.min(blue, red) + 1);