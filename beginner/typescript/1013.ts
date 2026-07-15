var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const [a, b, c] = lines[0].split(" ").map(Number);

const maiorAB: number = (a + b + Math.abs(a - b)) / 2;

if (maiorAB > c) {
    console.log(`${maiorAB} eh o maior`);
} else {
    console.log(`${c} eh o maior`);
}
