var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines[0]);

let originalValue = x;
let bill100 = 0;
let bill50 = 0;
let bill20 = 0;
let bill10 = 0;
let bill5 = 0;
let bill2 = 0;
let bill1 = 0;

while (x !== 0) {
    while (x >= 100) {
        x = x - 100;
        bill100++;
    }
    while (x >= 50) {
        x = x - 50;
        bill50++;
    }
    while (x >= 20) {
        x = x - 20;
        bill20++;
    }
    while (x >= 10) {
        x = x - 10;
        bill10++;
    }
    while (x >= 5) {
        x = x - 5;
        bill5++;
    }
    while (x >= 2) {
        x = x - 2;
        bill2++;
    }
    while (x >= 1) {
        x = x - 1;
        bill1++;
    }
}

console.log(originalValue);
console.log(`${bill100} nota(s) de R$ 100,00`);
console.log(`${bill50} nota(s) de R$ 50,00`);
console.log(`${bill20} nota(s) de R$ 20,00`);
console.log(`${bill10} nota(s) de R$ 10,00`);
console.log(`${bill5} nota(s) de R$ 5,00`);
console.log(`${bill2} nota(s) de R$ 2,00`);
console.log(`${bill1} nota(s) de R$ 1,00`);
