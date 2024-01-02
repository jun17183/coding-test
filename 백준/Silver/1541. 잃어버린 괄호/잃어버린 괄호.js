let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
input[0].split("-").forEach((item, idx) => {
    let temp = item.split("+");

    temp.forEach(num => {
        if (idx) {
            answer -= Number(num);
        } else {
            answer += Number(num);
        }
    });
});

console.log(answer);