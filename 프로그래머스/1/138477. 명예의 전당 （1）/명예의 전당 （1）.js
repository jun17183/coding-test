function solution(k, score) {
    let arr = [score[0]];
    let answer = [score[0]];
    
    for (let i = 1; i < score.length; i++) {
        if (i <= k - 1) {
            arr.push(score[i]);
            answer.push(Math.min(...arr));
        } else {
            let min = Math.min(...arr);
            if (min < score[i]) {
                let idx = arr.indexOf(min);
                arr.splice(idx, 1);
                arr.push(score[i]);
                answer.push(Math.min(...arr));
            } else {
                answer.push(min);
            }
        }
    }
    
    return answer;
}