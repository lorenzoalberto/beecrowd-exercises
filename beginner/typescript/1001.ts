var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * In lines[0], there is a difference:
 * parseInt(): accepts a string and reads the numeric prefix.
 * Example: the input "10abc" becomes 10.
 *
 * Number(): expects a fully numeric value and returns NaN for invalid strings.
 */

const x: number = parseInt(lines[0]);
const y: number = parseInt(lines[1]);

console.log(`X = ${x + y}`);
