var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let vendorName: string = lines[0];
let vendorSalary: number = parseFloat(lines[1]);
let vendorSellingsPerMouth: number = parseFloat(lines[2]);

let bonusPerSelling: number = vendorSellingsPerMouth * 0.15 + vendorSalary;

console.log(`TOTAL = R$ ${bonusPerSelling.toFixed(2)}`);
