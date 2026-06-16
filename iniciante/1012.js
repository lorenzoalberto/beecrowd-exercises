var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// -- .split(" ") natualmente gera string. .map(Number) transforma o tipo de todos
const [a, b, c] = lines[0].split(" ").map(Number);

const areaTriangulo = (a * c) / 2;
const areaCirculoRaio = 3.14159 * c * c;
const areaTrapezio = ((a + b) * c) / 2;
const areaQuadrado = b * b;
const areaRetangulo = a * b;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculoRaio.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
