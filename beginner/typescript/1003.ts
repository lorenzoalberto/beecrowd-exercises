var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let A: number = parseInt(lines[0]);
let B: number = parseInt(lines[1]);

const X: number = A + B;

console.log(`SOMA = ${X}`);
