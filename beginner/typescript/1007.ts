var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a: number = parseInt(lines[0]);
let b: number = parseInt(lines[1]);
let c: number = parseInt(lines[2]);
let d: number = parseInt(lines[3]);

const difference: number = a * b - c * d;

console.log(`DIFERENCA = ${difference}`);
