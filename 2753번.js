const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const number = Number(input[0]);
if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
