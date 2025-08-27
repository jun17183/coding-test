const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => new Set());

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].add(b);
    graph[b].add(a);
}

for (let i = 1; i <= N; i++) {
    graph[i] = [...graph[i]].sort((a, b) => a - b);
}

function dfs(start) {
    const visited = new Array(N + 1).fill(false);
    const result = [];
    
    function _dfs(node) {
        visited[node] = true;
        result.push(node);
        
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                _dfs(neighbor);
            }
        }
    }
    
    _dfs(start);
    return result;
}

function bfs(start) {
    const visited = new Array(N + 1).fill(false);
    const queue = [start];
    const result = [];
    
    visited[start] = true;
    
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    
    return result;
}

console.log(dfs(V).join(' '));
console.log(bfs(V).join(' '));