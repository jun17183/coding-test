let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.reduce((acc, cur, i) => { if (i === 0) return acc; acc.push(cur.split(' ').map(Number)); return acc; }, []).sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});
let answer = 0;
let finish = 0;

input.forEach((item, i) => {
    if (i === 0) {
        finish = item[1];
        return answer++;
    }
    if (item[0] >= finish) {
        finish = item[1];
        return answer++;
    }
});

console.log(answer);