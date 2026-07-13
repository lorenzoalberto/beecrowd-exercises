var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// -- .split(" ") returns strings. .map(Number) converts every value to a number.
const [a, b, c] = lines[0].split(" ").map(Number);

const triangleArea = (a * c) / 2;
const circleArea = 3.14159 * c * c;
const trapezoidArea = ((a + b) * c) / 2;
const squareArea = b * b;
const rectangleArea = a * b;

console.log(`TRIANGULO: ${triangleArea.toFixed(3)}`);
console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezoidArea.toFixed(3)}`);
console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);
