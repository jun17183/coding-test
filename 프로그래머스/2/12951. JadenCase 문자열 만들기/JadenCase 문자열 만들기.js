function solution(s) {
    return s.split(" ").reduce((acc, cur) => {
        if (cur !== "") {
            cur = cur.toLowerCase();
            cur = cur.replace(cur[0], cur[0].toUpperCase());
        }
        acc.push(cur);
        return acc;
    }, []).join(" ");
}