function solution(N, stages) {
    let arr = [];
    
    for (let i = 1; i <= N; i++) {
        let reach = stages.filter(item => item >= i).length;
        let fail = stages.filter(item => item === i).length;
        arr.push([i, fail / reach]);
    }
    
    return arr.sort((a, b) => b[1] - a[1]).map(item => item[0]);
}