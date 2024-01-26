let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];

input = input.reduce((acc, cur, idx) => {
    if (idx === 0) {
        acc.push(0);
    } else {
        acc.push(Number(cur));
    }
    return acc;
}, []);

let fibo = [0, 1];
let num = input.pop();

while (input.length > 0 && num) {
    let idx = fibo.length;
    fibo[idx] = fibo[idx - 2] + fibo[idx - 1];

    if (fibo[idx] === num) {
        answer.push(fibo[idx]);
        num = input.pop();
        continue;
    }

    if (fibo[idx] > num) {
        let temp = [];
        while (num > 0) {
            if (fibo[idx] > num) {
                idx--;
            } else {
                num -= fibo[idx];
                temp.push(fibo[idx]);
            }
        }
        answer.push(temp.sort((a, b) => a - b).join(' '));
        num = input.pop();
    }
}
for (let i = answer.length - 1; i >= 0; i--) {
    console.log(answer[i]);
}