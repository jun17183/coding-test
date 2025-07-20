const fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(' ');

function gcd(a, b) {
    let r;
    while (b !== 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(gcd(a, b));
console.log(lcm(a, b));