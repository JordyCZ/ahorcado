import keyBoard from "./keyboard.js";
document.addEventListener("DOMContentLoaded", () => {
  const board = new keyBoard();
  document.querySelector('#bot').appendChild(board.createBoard())
});
