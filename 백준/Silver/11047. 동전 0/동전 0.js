let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
let [N, K] = input[0].split(" ");
N = +N;
K = +K;

for (let i = N; i >= 1; i--) {
    let coin = +input[i];
    if (coin > K) continue;

    answer += Math.floor(K / coin);
    K = K % coin;
}

console.log(answer);