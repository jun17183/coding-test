let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const stack = [];
  let isYes = true;
  
  for (let item of input[i]) {
    if (item === ')') {
      if (!stack.length) {
        isYes = false;
        break;
      } else {
        stack.pop();
      }
    } else {
      stack.push(item);
    }
  }

  if (stack.length || !isYes) {
    console.log('NO');
  } else {
    console.log('YES');
  }
}