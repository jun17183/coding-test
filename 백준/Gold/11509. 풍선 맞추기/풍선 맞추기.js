let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];
input = input[1].split(' ');

for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);
    let idx = arr.indexOf(num + 1);

    if (idx > -1) {
        arr[idx] = num;
    } else {
        arr.push(num);
    }
}

console.log(arr.length);