function solution(arr, divisor) {
    let returnArr = arr.filter(num => num % divisor === 0);
    return (returnArr.length === 0 ? [-1] : returnArr.sort((a, b) => a - b));
}