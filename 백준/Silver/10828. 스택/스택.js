let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];
const result = [];

for (let i = 1; i < input.length; i++) {
  const [cmd, value] = input[i].split(" ");

  switch (cmd) {
    case 'push':
      stack.push(value);
      break;
    case 'pop':
      result.push(stack.length ? stack.pop() : -1);
      break;
    case 'size':
      result.push(stack.length);
      break;
    case 'empty':
      result.push(stack.length ? 0 : 1);
      break;
    case 'top': {
      result.push(stack.length ? stack[stack.length - 1] : -1);
    }
  }
}

console.log(result.join('\n'))