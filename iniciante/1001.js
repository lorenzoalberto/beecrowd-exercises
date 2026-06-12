var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// essa linha não faz nada, o correto seria a abaixo: - limpando os espaços em branco e dividindo a string em linhas
input.trim().split("\n");
// var lines = input.trim().split("\n");

// -- parseInt() converte a string para um número inteiro, não precisa de Number()
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

const X = A + B;

console.log(`X = ${X}`);
