let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function check(str) {
    return str === str.split('').reverse().join('');
}

for (let i = 1; i < input.length; i++) {
    let str = input[i];
    if (check(str)) console.log(0);
    else {
        let found = false;
        let len = str.length;

        for (let i = 0; i < parseInt(len / 2); i++) {
            if (str[i] != str[len - i - 1]) {
                if (check(str.slice(0, i) + str.slice(i + 1, len))) found = true;
                if (check(str.slice(0, len - i - 1) + str.slice(len - i, len))) found = true;
                break;
            }
        }

        if (found) console.log(1);
        else console.log(2);
    }
}