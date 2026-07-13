var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a: number = parseFloat(lines[0]);
let b: number = parseFloat(lines[1]);

const gradeWeightA: number = 3.5;
const gradeWeightB: number = 7.5;
const gradeWeightSum: number = gradeWeightA + gradeWeightB;

let mediaCalc: string = (
    (a * gradeWeightA + b * gradeWeightB) /
    gradeWeightSum
).toFixed(5);
parseFloat(mediaCalc);

console.log(`MEDIA = ${mediaCalc}`);
