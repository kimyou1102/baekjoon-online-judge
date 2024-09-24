const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input
  .shift()
  .trim()
  .split(" ")
  .map((x) => +x);

let s = input[0]
  .trim()
  .split(" ")
  .map((x) => +x);
const d = input[1]
  .trim()
  .split(" ")
  .map((x) => +x);

let p = Array(n).fill(0);

for (let i = 0; i < k; i++) {
  for (let j = 0; j < n; j++) {
    p[d[j] - 1] = s[j];
  }
  s = [...p];
}

console.log(p.join(" "));
