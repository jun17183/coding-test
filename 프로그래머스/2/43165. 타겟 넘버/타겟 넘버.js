function solution(numbers, target) {
    let answer = 0;
    
    function DFS(sum, idx) {
        let plusSum = sum + numbers[idx];
        let minusSum = sum - numbers[idx];
        
        if (idx === numbers.length - 1) {
            if (plusSum === target) answer++;
            if (minusSum === target) answer++;
            return;
        }
        
        DFS(plusSum, idx + 1);
        DFS(minusSum, idx + 1);
    }
    
    DFS(0, 0);
    
    return answer;
}