const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());

const t = Number(input.shift());
let answer = "";

for (let i = 0; i < input.length; i += 2) {
  const n = Number(input[i]);
  const arr = input[i + 1].split(" ").map((x) => +x);

  answer += `${Math.min(...arr)} ${Math.max(...arr)} \n`;
}

console.log(answer);
