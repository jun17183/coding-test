function solution(X, Y) {
    let answer = [];
    let temp;
    
    if (X.length > Y.length) {
        temp = X;
        X = Y;
        Y = temp;
    }
    
    while (X.length > 0) {
        let c = X[0];
        let splitX = X.split(c);
        let xCnt = splitX.length - 1;
        let yCnt = Y.split(c).length - 1;
        
        if (xCnt > yCnt && yCnt > 0) {
            answer = answer.concat(new Array(yCnt).fill(c));
        } else if (xCnt <= yCnt && xCnt > 0) {
            answer = answer.concat(new Array(xCnt).fill(c));
        }
        
        X = splitX.join("");
    }
    
    if (answer.length === 0) return "-1";
    
    answer = answer.sort((a, b) => b - a).join("");
    
    return answer[0] === "0" ? "0" : answer;
}