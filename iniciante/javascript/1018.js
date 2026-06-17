var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines[0]);

let valorOriginal = x;
let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;
let nota5 = 0;
let nota2 = 0;
let nota1 = 0;

while (x !== 0) {
    while (x >= 100) {
        x = x - 100;
        nota100++;
    }
    while (x >= 50) {
        x = x - 50;
        nota50++;
    }
    while (x >= 20) {
        x = x - 20;
        nota20++;
    }
    while (x >= 10) {
        x = x - 10;
        nota10++;
    }
    while (x >= 5) {
        x = x - 5;
        nota5++;
    }
    while (x >= 2) {
        x = x - 2;
        nota2++;
    }
    while (x >= 1) {
        x = x - 1;
        nota1++;
    }
}

console.log(valorOriginal);
console.log(`${nota100} nota(s) de R$ 100,00`);
console.log(`${nota50} nota(s) de R$ 50,00`);
console.log(`${nota20} nota(s) de R$ 20,00`);
console.log(`${nota10} nota(s) de R$ 10,00`);
console.log(`${nota5} nota(s) de R$ 5,00`);
console.log(`${nota2} nota(s) de R$ 2,00`);
console.log(`${nota1} nota(s) de R$ 1,00`);
