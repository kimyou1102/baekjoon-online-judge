const { spawn } = require("child_process");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((x) => +x);
let state = input[1].split(" ").map((x) => +x);
const command = input.slice(2).map((x) =>
  x
    .trim()
    .split(" ")
    .map((z) => +z)
);

for (let i = 0; i < m; i++) {
  control(command[i]);
}

console.log(state.join(" "));
function control(command) {
  const [a, b, c] = command;

  switch (a) {
    case 1:
      state[b - 1] = c;
      break;
    case 2:
      for (let i = b - 1; i < c; i++) {
        state[i] = state[i] === 0 ? 1 : 0;
      }
      break;
    case 3:
      for (let i = b - 1; i < c; i++) {
        state[i] = 0;
      }
      break;
    case 4:
      for (let i = b - 1; i < c; i++) {
        state[i] = 1;
      }
      break;
    default:
      break;
  }
}
