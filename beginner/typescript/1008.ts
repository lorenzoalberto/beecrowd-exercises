var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let workerNumber: number = parseInt(lines[0]);
let workedHours: number = parseInt(lines[1]);
let paymentPerHour: number = parseFloat(lines[2]);

let paymentPerWorkedHours: number = workedHours * paymentPerHour;

console.log(`NUMBER = ${workerNumber}`);
console.log(`SALARY = U$ ${paymentPerWorkedHours.toFixed(2)}`);
