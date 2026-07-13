var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);

const gradeWeightA = 3.5;
const gradeWeightB = 7.5;
const gradeWeightSum = gradeWeightA + gradeWeightB;

const mediaCalc = (
    (a * gradeWeightA + b * gradeWeightB) /
    gradeWeightSum
).toFixed(5);
mediaCalc - parseFloat(mediaCalc);

console.log(`MEDIA = ${mediaCalc}`);
