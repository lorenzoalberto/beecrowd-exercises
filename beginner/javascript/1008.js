var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let workerNumber = parseInt(lines[0]);
let workedHours = parseInt(lines[1]);
let paymentPerHour = parseFloat(lines[2]);

let paymentPerWorkedHours = workedHours * paymentPerHour;
paymentPerWorkedHours = paymentPerWorkedHours.toFixed(2);

console.log(`NUMBER = ${workerNumber}`);
console.log(`SALARY = U$ ${paymentPerWorkedHours}`);
