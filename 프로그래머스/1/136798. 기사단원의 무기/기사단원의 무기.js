function solution(number, limit, power) {
    let answer = 0;
    let arr = [1];
    
    for (let n = 2; n <= number; n++) {
        arr.push(2);
        
        let sqrt = Math.sqrt(n);
        for (let i = 2; i <= sqrt; i++) {
            if (i === sqrt) {
                arr[n - 1]++;
            } else if (n % i === 0) {
                arr[n - 1] += 2;
            }
        }
    }
    
    for (let n of arr) {
        if (n > limit) {
            answer += power;
        } else {
            answer += n;
        }
    }
    
    return answer;
}