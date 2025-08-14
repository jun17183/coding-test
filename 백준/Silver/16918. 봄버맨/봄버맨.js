const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [R, C, N] = input[0].split(' ').map(Number);
const field = input.slice(1).map(row => row.split(''));

if (N % 2 === 0) {
    // 짝수초: 모든 칸에 폭탄
    const allBombs = Array(R).fill('O'.repeat(C));
    console.log(allBombs.join('\n'));
} else if (N === 1) {
    // 1초: 초기 상태
    console.log(field.map(row => row.join('')).join('\n'));
} else if (N % 4 === 3) {
    // 3, 7, 11초...: 초기 폭탄들이 터짐
    const result = Array(R).fill().map(() => Array(C).fill('O'));
    
    field.forEach((row, ri) => {
        row.forEach((item, ci) => {
            if (item === 'O') {
                result[ri][ci] = '.';
                if (ri - 1 >= 0) result[ri - 1][ci] = '.';
                if (ri + 1 < R) result[ri + 1][ci] = '.';
                if (ci - 1 >= 0) result[ri][ci - 1] = '.';
                if (ci + 1 < C) result[ri][ci + 1] = '.';
            }
        });
    });
    
    console.log(result.map(row => row.join('')).join('\n'));
} else {
    // 5, 9, 13초...: 2초에 설치한 폭탄들이 터짐 (3초 상태에서 폭탄 설치 후 터짐)
    // 3초 상태를 먼저 구하고, 거기서 빈 칸에 폭탄을 설치한 뒤 터뜨림
    const step3 = Array(R).fill().map(() => Array(C).fill('O'));
    
    // 3초 상태 계산
    field.forEach((row, ri) => {
        row.forEach((item, ci) => {
            if (item === 'O') {
                step3[ri][ci] = '.';
                if (ri - 1 >= 0) step3[ri - 1][ci] = '.';
                if (ri + 1 < R) step3[ri + 1][ci] = '.';
                if (ci - 1 >= 0) step3[ri][ci - 1] = '.';
                if (ci + 1 < C) step3[ri][ci + 1] = '.';
            }
        });
    });
    
    // 4초에 빈 칸에 폭탄 설치한 위치들 찾기
    const result = Array(R).fill().map(() => Array(C).fill('O'));
    
    step3.forEach((row, ri) => {
        row.forEach((item, ci) => {
            if (item === 'O') { // 4초에 설치된 폭탄
                result[ri][ci] = '.';
                if (ri - 1 >= 0) result[ri - 1][ci] = '.';
                if (ri + 1 < R) result[ri + 1][ci] = '.';
                if (ci - 1 >= 0) result[ri][ci - 1] = '.';
                if (ci + 1 < C) result[ri][ci + 1] = '.';
            }
        });
    });
    
    console.log(result.map(row => row.join('')).join('\n'));
}