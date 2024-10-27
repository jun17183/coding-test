let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let inputIdx = 1; inputIdx <= Number(input[0]); inputIdx++) {
  let arr = input[inputIdx * 2].split(' ').map(Number);
  let answer = 0;
  let max = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < max) {
      answer += max - arr[i];
    }
  }

  console.log(answer);
}