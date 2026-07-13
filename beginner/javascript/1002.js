var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let raio = parseFloat(lines[0]);

const calcArea = 3.14159 * (raio * raio);

// -- toFixed returns a string
const calcAreaRoudend = calcArea.toFixed(4);
console.log(`A=${calcAreaRoudend}`);
