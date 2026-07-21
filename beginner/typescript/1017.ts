var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const tempoGasto: number = parseInt(lines[0]);
const velocidadeMedia: number = parseInt(lines[1]);

const autonomiaAutomovel: number = 12;

console.log(
    `${((tempoGasto / autonomiaAutomovel) * velocidadeMedia).toFixed(3)}`,
);
