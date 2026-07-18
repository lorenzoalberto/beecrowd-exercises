var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a: number = parseFloat(lines[0]);
let b: number = parseFloat(lines[1]);

console.log(`${(a / b).toFixed(3)} km/l`);
