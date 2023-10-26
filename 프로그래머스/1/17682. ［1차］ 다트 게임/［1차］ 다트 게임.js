function solution(dartResult) {
    let points = [];
    let temp = "";
    
    for (let i = 0; i < dartResult.length; i++) {
        let c = dartResult[i];
        
        if (Number.isInteger(parseInt(c))) {
            temp += c;
            continue;
        }
        
        switch (c) {
            case "S":
                points.push(parseInt(temp));
                temp = "";
                break;
            case "D":
                points.push(Math.pow(parseInt(temp), 2));
                temp = "";
                break;
            case "T":
                points.push(Math.pow(parseInt(temp), 3));
                temp = "";
                break;
            case "#":
                points[points.length - 1] = points[points.length - 1] * -1;
                break;
            case "*":
                points[points.length - 1] = points[points.length - 1] * 2;
                if (points.length > 1) {
                    points[points.length - 2] = points[points.length - 2] * 2;
                }
                break;
        }
    }
    
    return points.reduce((acc, cur) => acc += cur, 0);
}