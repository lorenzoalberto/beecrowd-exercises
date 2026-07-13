var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const x = parseInt(lines[0]);

console.log(`${x * 2} minutos`);
