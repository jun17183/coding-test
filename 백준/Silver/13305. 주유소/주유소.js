let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
const distance = input[1].split(" ");
const cost = input[2].split(" ");

for (let i = 0; i < distance.length; i++) {
    if (i === 0 || cost[i] <= cost[i - 1]) {
        answer += Number(distance[i]) * Number(cost[i]);
    } else {
        answer += Number(distance[i]) * Number(cost[i - 1]);
    }
}
console.log(answer);