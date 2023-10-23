function solution(a, b) {
    var answer = 0;
    
    if (a > b) {
        answer += a;
        a = b;
        b = answer;
    } else {
        answer += b;
    }
    
    while (a < b) {
        answer += a;
        a++;
    }
    
    return answer;
}