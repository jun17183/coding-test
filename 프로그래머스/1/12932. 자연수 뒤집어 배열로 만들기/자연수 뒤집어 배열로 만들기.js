function solution(n) {
    return ("" + n).split("").map(item => parseInt(item)).reverse();
}