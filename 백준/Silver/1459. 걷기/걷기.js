const fs = require('fs');
const [X, Y, W, S] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const minXY = Math.min(X, Y);   // 이동 가능한 대각 거리 (최소값이니)
const maxXY = Math.max(X, Y);   // maxXY - minXY = 대각 이동 후 필요한 직선 거리

let answer;

// 대각선이 직선*2보다 크면 전부 직선 이동
if (S >= 2 * W) { 
    answer = (X + Y) * W;
} 
// 대각선이 직선 1번보다 작음 -> 어차피 직선 이동이 가능해도 대각 이동이 나음. 남은 한 칸만 직선 이동
else if (S <= W) {
    // 전부 대각선 이동(짝수)
    if ((X + Y) % 2 === 0) {
        answer = maxXY * S;
    }
    // 대각 이동(짝수) + 1  
    else {
        answer = (maxXY - 1) * S + W;
    }
} 
// 대각선이 직선 2번보다는 작지만 1번보다는 큼 -> 가능하면 대각 이동. 나머지는 직선
else {
    answer = minXY * S + (maxXY - minXY) * W;
}

console.log(answer);