const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = 0;
const [left, right] = input[0].split(" ").map((x) => x.trim());
const string = input[1];

const keyboard = {
  left: [
    ["q", "w", "e", "r", "t"],
    ["a", "s", "d", "f", "g"],
    ["z", "x", "c", "v", ""],
  ],
  right: [
    ["", "y", "u", "i", "o", "p"],
    ["", "h", "j", "k", "l", ""],
    ["b", "n", "m", "", "", ""],
  ],
};

const leftPosition = getPosition(left, keyboard.left);
const rightPosition = getPosition(right, keyboard.right);

let currentPosition = {
  left: leftPosition,
  right: rightPosition,
};

for (let i = 0; i < string.length; i++) {
  const word = string[i];
  const hand = leftOrRight(word);
  const newPosition = getPosition(word, keyboard[hand]);
  const distance =
    Math.abs(currentPosition[hand][1] - newPosition[1]) +
    Math.abs(currentPosition[hand][0] - newPosition[0]);
  answer += distance + 1;
  currentPosition[hand] = newPosition;
}

console.log(answer);

function getPosition(word, arr) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(word)) {
      x = i;
    }
  }
  y = arr[x].indexOf(word);

  return [x, y];
}

function leftOrRight(word) {
  if (keyboard.left.some((row) => row.includes(word))) {
    return "left";
  }

  if (keyboard.right.some((row) => row.includes(word))) {
    return "right";
  }
}
