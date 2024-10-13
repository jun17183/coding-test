let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0]);

let answer = parseInt(input / 2) + 1;
let i = parseInt(input / 5);

for (; i >= 0; i--) {
    let rest = input - (5 * i);
    
    if (rest % 2 === 0 && answer > i + (rest / 2)) answer = i + (rest / 2); 
}

if (answer === parseInt(input / 2) + 1) {
    console.log(-1);
} else {
    console.log(answer);
}