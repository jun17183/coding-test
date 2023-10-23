function solution(n) {
    if (n === 1 || n === 0) return n;
    
    let result = 1 + n;
    let len = n / 2;
    
    for (let i = 2; i < len; i++) {
        if (n % i === 0) {
            result += i;
            if (i !== n / i) result += n / i;
        }
        len = n / i;
    }
    return result;
}