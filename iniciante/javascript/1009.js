var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let vendorName = lines[0];
let vendorSalary = parseFloat(lines[1]);
let vendorSellingsPerMouth = parseFloat(lines[2]);

let bonusPerSelling = vendorSellingsPerMouth * 0.15 + vendorSalary;
bonusPerSelling = bonusPerSelling.toFixed(2);

console.log(`TOTAL = R$ ${bonusPerSelling}`);
