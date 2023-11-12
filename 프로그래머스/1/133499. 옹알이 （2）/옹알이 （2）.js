function solution(babbling) {
    let answer = 0;
    
    for (let item of babbling) {
        let prev = "";
        let temp = "";
        for (let i = 0; i < item.length; i++) {
            temp += item[i];
            if (prev !== temp && (temp === "aya" || temp === "ye" || temp === "woo" || temp === "ma")) {
                prev = temp;
                temp = "";
            }
        }
        if (temp === "") answer++;
    }
    
    return answer;
}