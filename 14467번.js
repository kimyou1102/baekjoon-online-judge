const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = 0;
const obj2 = {};
for (let i = 0; i < n; i++) {
  const [num, dir] = input[i].split(" ");

  if (obj2[num]) {
    if (obj2[num] !== dir) {
      count += 1;
    }
    obj2[num] = dir;
  } else {
    obj2[num] = dir;
  }
}

const n = Number(input.shift());
const arr = input.map((x) =>
  x
    .trim()
    .split(" ")
    .map((x) => +x)
);
const obj = {};

for (let i = 0; i < n; i++) {
  const [num, position] = arr[i];
  if (obj[num]) {
    if (obj[num].currentPosition !== position) {
      obj[num] = {
        currentPosition: position,
        count: obj[num].count + 1,
      };
    }
  } else {
    obj[num] = {
      currentPosition: position,
      count: 0,
    };
  }
}

console.log(
  Object.values(obj)
    .map((x) => x.count)
    .reduce((a, b) => a + b)
);
