// function solution(keymap, targets) {
//     let answer = [];
//     let map = {}
    
//     for (let word of targets) {
//         let cnt = 0;
//         for (let c of word) {
//             if (map[c] !== undefined) {
//                 if (map[c] === -1) {
//                     cnt = -1;
//                     break;
//                 }
//                 cnt += map[c] + 1;
//                 continue;
//             }
            
//             let idx = 100;
            
//             for (let i = 0; i < keymap.length; i++) {
//                 let kIdx = keymap[i].indexOf(c);
//                 if (kIdx !== -1 && kIdx < idx) idx = kIdx;
//             }
            
//             if (idx < 100) {
//                 map[c] = idx;
//                 cnt += idx + 1;
//             } else {
//                 map[c] = -1;
//                 cnt = -1;
//                 break;
//             }
//         }
//         answer.push(cnt);
//     }
    
//     return answer;
// }

3
4
5
6
7
8
9
10
11
12
function solution(keymap, targets) {
    const answer = [];
    const map = {}
    for (const items of keymap) {
        items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
    }
    for (const items of targets) {
        answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
    }
    return answer;
}