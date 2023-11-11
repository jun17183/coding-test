// 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 값 세팅
let answer1 = 0;
let answer2 = 0;
let arr1 = new Array();
let arr2 = new Array();

for (let n = 1; n < input.length; n++) {
    let item = input[n].split('');
    if (item[item.length - 1] === '\r') item.pop();

    // 정상 시점 배열
    arr1.push(item);

    // 적록색약 시점 배열
    arr2.push(new Array());
    for (let color of item) {
        if (color === 'B') {
            arr2[n-1].push(color);
        } else {
            arr2[n-1].push('RG');
        }
    }
}

// DFS
function DFS(arr, y, x) {
    if (!!arr[y] && arr[y][x] !== 'visited') {
        let color = arr[y][x];
        arr[y][x] = 'visited';
        
        if (!!arr[y+1] && arr[y+1][x] === color) DFS(arr, y+1, x);
        if (!!arr[y-1] && arr[y-1][x] === color) DFS(arr, y-1, x);
        if (!!arr[y] && arr[y][x+1] === color) DFS(arr, y, x+1);
        if (!!arr[y] && arr[y][x-1] === color) DFS(arr, y, x-1);
    }
}

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        // 일반 시점
        if (arr1[i][j] !== 'visited') {
            DFS(arr1, i, j);
            answer1++;
        }

        // 적록색약 시점
        if (arr2[i][j] !== 'visited') {
            DFS(arr2, i, j);
            answer2++;
        }
    }
}

console.log(answer1 + " " + answer2);