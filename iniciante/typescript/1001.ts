var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Em lines[0], há diferença:
 * parseInt(): aceita string mas recolhe apenas os números.
 * Exemplo: a entrada "abc10" ficará apenas 10.
 *
 * Number(): aceita apenas números, retornando erro quando strings ou qualquer outro tipo é colocado.
 */

const x: number = parseInt(lines[0]);
const y: number = parseInt(lines[1]);

console.log(`X = ${x + y}`);
