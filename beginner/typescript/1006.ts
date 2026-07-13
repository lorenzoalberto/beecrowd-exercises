var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a: number = parseFloat(lines[0]);
let b: number = parseFloat(lines[1]);
let c: number = parseFloat(lines[2]);

const gradeWeightA: number = 2;
const gradeWeightB: number = 3;
const gradeWeightC: number = 5;
const gradeWeightSum: number = gradeWeightA + gradeWeightB + gradeWeightC;

const mediaCalc: string = (
    (a * gradeWeightA + b * gradeWeightB + c * gradeWeightC) /
    gradeWeightSum
).toFixed(1);
parseFloat(mediaCalc);

console.log(`MEDIA = ${mediaCalc}`);
