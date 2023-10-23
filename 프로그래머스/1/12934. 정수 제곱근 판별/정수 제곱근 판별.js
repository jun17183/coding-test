function solution(n) {
    let sqrt = Math.sqrt(n);
    if (sqrt !== 0 && Number.isInteger(sqrt)) return Math.pow(sqrt + 1, 2);
    else return -1;
}