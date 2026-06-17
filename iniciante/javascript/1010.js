var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// -- forma usada para retirar mais de uma variável quando trazida em linha no stdin
let [product1Code, product1Quantity, product1Price] = lines[0].split(" ");
let [product2Code, product2Quantity, product2Price] = lines[1].split(" ");

product1Quantity = parseInt(product1Quantity);
product1Price = parseFloat(product1Price);
product2Quantity = parseInt(product2Quantity);
product2Price = parseFloat(product2Price);

const product1Total = product1Quantity * product1Price;
const product2Total = product2Quantity * product2Price;
let total = product1Total + product2Total;
total = parseFloat(total);
total = total.toFixed(2);

console.log(`VALOR A PAGAR: R$ ${total}`);
