var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

const gradeWeightA = 2;
const gradeWeightB = 3;
const gradeWeightC = 5;
const gradeWeightSum = gradeWeightA + gradeWeightB + gradeWeightC;

const mediaCalc = (
    (a * gradeWeightA + b * gradeWeightB + c * gradeWeightC) /
    gradeWeightSum
).toFixed(1);
mediaCalc - parseFloat(mediaCalc);

console.log(`MEDIA = ${mediaCalc}`);
