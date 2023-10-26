function solution(d, budget) {
    let result = 0;
    d.sort((a, b) => a - b).reduce((acc, cur, idx) => {
        if (acc + cur <= budget) {
            acc += cur;
            result = idx + 1;
        }
        return acc;
    }, 0);
    return result;
}