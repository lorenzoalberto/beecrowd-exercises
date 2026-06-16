var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let raio = parseFloat(lines[0]);

let volumeCalc = (4 / 3) * 3.14159 * raio * raio * raio;
volumeCalc = parseFloat(volumeCalc);

console.log(`VOLUME = ${volumeCalc.toFixed(3)}`);
