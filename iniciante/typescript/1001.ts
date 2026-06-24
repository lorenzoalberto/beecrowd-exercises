var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const x: number = parseInt(lines[0]);
const y: number = parseInt(lines[1]);

console.log(`X = ${x + y}`);
