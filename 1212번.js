const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = "";

answer = input[0] === "0" ? "0" : parseInt(input[0], 8).toString(2);

for (let i = 1; i < input.length; i++) {
  const binaryDigit = parseInt(input[i], 8).toString(2).padStart(3, "0");
  console.log(binaryDigit);
  answer += binaryDigit;
}

console.log(answer);
