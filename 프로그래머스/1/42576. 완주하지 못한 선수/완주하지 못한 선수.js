function solution(participant, completion) {
    // let map = {}
    // for (let p of participant) {
    //     map[p] = (map[p] || 0) + 1;
    // }
    // for (let c of completion) {
    //     map[c] = map[c] - 1;
    // }
    
    let map = {}
    for (let i = 0; i < participant.length; i++) {
        map[participant[i]] = (map[participant[i]] || 0) + 1;
        map[completion[i]] = (map[completion[i]] || 0) - 1;
    }
    for (let key in map) {
        if (map[key] === 1) return key;
    }
}