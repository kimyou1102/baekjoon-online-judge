const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = Number(input);
const end = getLen(n);
function getLen(num) {
  return 1 + 2 * (num - 1) * 2;
}

const arr = Array.from(Array(end), () => Array(end).fill(" "));

re(end, 0, n);
function re(len, x, num) {
  const maxLen = x + len;
  for (let i = x; i < maxLen; i++) {
    for (let j = x; j < maxLen; j++) {
      if (i === x || i === maxLen - 1 || j === x || j === maxLen - 1) {
        arr[i][j] = "*";
      }
    }
  }

  if (num === 0) {
    return;
  } else {
    re(getLen(num - 1), x + 2, num - 1);
  }
}

console.log(arr.map((x) => x.join("")).join("\n"));
