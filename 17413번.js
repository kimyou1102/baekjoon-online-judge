const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let arr = [];
let isTag = false;
let answer = "";
for (let i = 0; i < input.length; i++) {
  if (arr[arr.length - 1] === ">") {
    answer += arr.join("");
    arr = [];
  }
  if ((!isTag && input[i] === " ") || (!isTag && input[i] === "<")) {
    while (arr.length !== 0) {
      if (arr[arr.length - 1] === " ") {
        arr.pop();
      } else {
        answer += arr.pop();
      }
    }

    if (input[i] === " ") {
      answer += " ";
    }
  }

  if (input[i] === "<") isTag = true;
  if (input[i] === ">") isTag = false;

  arr.push(input[i]);
}

if (arr[arr.length - 1] === ">") {
  answer += arr.join("");
  arr = [];
} else {
  if (arr.length > 0) {
    while (arr.length !== 0) {
      answer += arr.pop();
    }
  }
}

console.log(answer);
