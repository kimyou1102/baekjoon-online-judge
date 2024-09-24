const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((x) => +x);
const number = Array.from({ length: 30 }, (v, i) => i + 1);
const none = number.filter((x) => !arr.includes(x));
console.log(none.join("\n"));
