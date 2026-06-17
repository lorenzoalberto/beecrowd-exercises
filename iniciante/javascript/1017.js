var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const tempoGasto = parseInt(lines[0]);
const velocidadeMedia = parseInt(lines[1]);

const autonomiaAutomovel = 12;

console.log(
    `${((tempoGasto / autonomiaAutomovel) * velocidadeMedia).toFixed(3)}`,
);
