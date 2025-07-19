const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const candies = input.reduce((acc, cur, idx) => {
    if (idx) acc.push(cur.split(''));
    return acc;
}, []);
let result = 0;

function getLeft(r, c, color) {
    let left = 0;

    for (let i = c - 1; i >= 0; i--) {
        if (candies[r][i] !== color) break;
        left++;
    }

    return left;
}

function getRight(r, c, color) {
    let right = 0;

    for (let i = c + 1; i < N; i++) {
        if (candies[r][i] !== color) break;
        right++;
    }

    return right;
}

function getUp(r, c, color) {
    let up = 0;

    for (let i = r - 1; i >= 0; i--) {
        if (candies[i][c] !== color) break;
        up++;
    }

    return up;
}

function getDown(r, c, color) {
    let down = 0;

    for (let i = r + 1; i < N; i++) {
        if (candies[i][c] !== color) break;
        down++;
    }

    return down;
}

for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
        let orginColor = candies[r][c];

        // 바꾸지 않은 채로 row 구하기
        result = Math.max(result, getLeft(r, c, orginColor) + getRight(r, c, orginColor) + 1);

        // 바꾸지 않은 채로 column 구하기
        result = Math.max(result, getUp(r, c, orginColor) + getDown(r, c, orginColor) + 1);

        // 왼쪽과 색 바꾼 뒤
        if (c > 0 && orginColor !== candies[r][c - 1]) {
            let leftColor = candies[r][c - 1];
            result = Math.max(result, getRight(r, c, leftColor) + 1);
            result = Math.max(result, getUp(r, c, leftColor) + getDown(r, c, leftColor) + 1);
        }

        // 오른쪽과 색 바꾼 뒤
        if (c < N - 1 && orginColor !== candies[r][c + 1]) {
            let rightColor = candies[r][c + 1];
            result = Math.max(result, getLeft(r, c, rightColor) + 1);
            result = Math.max(result, getUp(r, c, rightColor) + getDown(r, c, rightColor) + 1);
        }

        // 위와 색 바꾼 뒤
        if (r > 0 && orginColor !== candies[r - 1][c]) {
            let upColor = candies[r - 1][c];
            result = Math.max(result, getLeft(r, c, upColor) + getRight(r, c, upColor) + 1);
            result = Math.max(result, getDown(r, c, upColor) + 1);
        }

        // 아래와 색 바꾼 뒤
        if (r < N - 1 && orginColor !== candies[r + 1][c]) {
            let downColor = candies[r + 1][c];
            result = Math.max(result, getLeft(r, c, downColor) + getRight(r, c, downColor) + 1);
            result = Math.max(result, getUp(r, c, downColor) + 1);
        }
    }
}

console.log(result);