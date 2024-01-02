let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input = Number(input)) {
    let answer = 0;
    while (true) {
        if (input % 5 === 0) {
            answer += input / 5;
            break;
        } else {
            if (input === 0) {
                break;
            }
            if (input < 0) {
                answer = -1;
                break;
            }
            input -= 3;
            answer++;
        }
    }
    console.log(answer);
}

solution(input);