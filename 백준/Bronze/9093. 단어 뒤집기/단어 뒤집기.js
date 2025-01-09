let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const result = [];

  for (let word of input[i].split(' ')) {
    if (word.length === 1) {
      result.push(word);
      continue;
    }

    let middleIdx = Math.floor(word.length / 2)

    let front = '';
    let middle = word.length % 2 === 1 ? word[middleIdx] : '';
    let back = '';

    for (let j = 0; j < middleIdx; j++) {
      back = word[j] + back;
      front += word[word.length - 1 - j]
    }

    result.push(front + middle + back);
  }

  console.log(result.join(' '));
}