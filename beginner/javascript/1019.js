var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines[0]);

let hora = 0;
let min = 0;
let sec = 0;
while (x !== 0) {
    if (x >= 60) {
        x = x - 60;
        sec = sec + 60;

        if (sec > 59) {
            sec = 0;
            min++;

            if (min > 59) {
                min = 0;
                hora++;
            }
        }
    } else {
        sec = x;
        x = x - sec;
    }
}

console.log(`${hora}:${min}:${sec}`);
