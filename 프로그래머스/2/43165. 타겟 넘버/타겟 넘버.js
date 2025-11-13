function solution(numbers, target) {
    var answer = 0;
    
    function DFS(value, idx) {
        if (idx === numbers.length) {
            if (value === target) answer++;
            return;
        }
        
        DFS(value + numbers[idx], idx + 1);
        DFS(value - numbers[idx], idx + 1);
    }
    
    DFS(0, 0);
    
    return answer;
}