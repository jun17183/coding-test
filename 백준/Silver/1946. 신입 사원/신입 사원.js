let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    for (let i = 1; i < input.length; i++) {
        let num = Number(input[i]);
        let answer = 0;
        let arr = [];

        for (let j = i + 1; j <= i + num; j++) {
            arr.push(input[j].split(" ").map(item => Number(item)));
        }
        
        arr.sort((a, b) => a[0] - b[0]);

        let min = 1000001;

        for (let n = 0; n < arr.length; n++) {
            if (arr[n][1] < min) {
                min = arr[n][1];
                answer++;
            }
        }

        console.log(answer)

        i += num;
    }
}

solution(input);