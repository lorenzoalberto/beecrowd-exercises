var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let raio: number = parseFloat(lines[0]);

let volumeCalc: number = (4 / 3) * 3.14159 * raio * raio * raio;

console.log(`VOLUME = ${volumeCalc.toFixed(3)}`);
