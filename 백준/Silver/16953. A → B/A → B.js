let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 1;
let flag = false;
let [A, B] = input[0].split(" ");
A = Number(A);
B = Number(B);

while (B >= A) {
    if (B === A) {
        console.log(answer);
        flag = true;
        break;
    }
    if (B % 2 === 0) {
        B /= 2;
        answer++;
    } else if (B.toString().endsWith("1")) {
        B = Number(B.toString().slice(0, -1));
        answer++;
    } else {
        break;
    }
}

if (!flag) console.log(-1);