const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

const center = Math.floor(n / 2);
let count = 0;
let current = [center, center];
const arr = Array.from(Array(n), () => Array(n).fill(0));
let position = "";

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let num = 1;
arr[center][center] = num;

while (num < n * n) {
  for (let [index, [x, y]] of dir.entries()) {
    if (index % 2 === 0) count += 1;

    for (let i = 0; i < count; i++) {
      num += 1;
      if (num === m) {
        position = `${current[0] + x + 1} ${current[1] + y + 1}`;
      }
      if (num > n * n) break;

      current = [current[0] + x, current[1] + y];
      arr[current[0]][current[1]] = num;
    }
  }
}

console.log(arr.map((x) => x.join(" ")).join("\n"));
console.log(position);
