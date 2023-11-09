// BFS
const dx = [0,0,1,-1]
const dy = [1,-1,0,0]

function solution(maps) {
    let answer = -1;
    const stack = [{rowIdx:0,columnIdx:0,tried:1}]
    const maxRow = maps.length
    const maxColumn = maps[0].length

    while(stack.length !== 0){
        const {rowIdx,columnIdx,tried} = stack.pop()

        for(let i=0;i<4;i++){
            const newRowIdx = rowIdx + dx[i]
            const newColumnIdx = columnIdx + dy[i]

            if(rowIdx === maxRow-1 && columnIdx === maxColumn - 1){
                answer = tried
                return answer
            }

            if(newRowIdx >=0 && newRowIdx < maxRow && columnIdx >=0 && columnIdx < maxColumn && maps[newRowIdx][newColumnIdx] === 1){
                maps[newRowIdx][newColumnIdx] = 0
                stack.unshift({rowIdx:newRowIdx, columnIdx:newColumnIdx, tried : tried+1})
            }
        }
    }

    return answer;
}