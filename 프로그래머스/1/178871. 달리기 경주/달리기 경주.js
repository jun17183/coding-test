function solution(players, callings) {
    let answer = [];
    
    let map = {}
    players.forEach((player, idx) => {
        map[player] = idx;
    });
    
    for (let call of callings) {
        let idx = map[call];
        
        let temp = players[idx - 1];
        players[idx - 1] = call;
        players[idx] = temp;
        
        map[call]--;
        map[temp]++;
    }
    
    Object.keys(map).forEach(player => {
        answer.push({ player: player, grade: map[player] }); 
    });
    
    return answer.sort((a, b) => a.grade - b.grade).map(item => item.player);
    
}