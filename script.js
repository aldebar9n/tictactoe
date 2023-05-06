const cells = document.querySelectorAll(".cells");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let currentPlayer = "X";
let gameEnd = false;
let startButton = document.getElementById("start-button");
let restartButton = document.getElementById("restart-button");

startButton.addEventListener("click", () => {
  gameEnd = false;
  currentPlayer = "X";
  cells.forEach(cell => {
    cell.textContent = "";
  });
  restartButton.disabled = false;
});

restartButton.addEventListener("click", () => {
  gameEnd = false;
  currentPlayer = "X";
  cells.forEach(cell => {
    cell.textContent = "";
  });
  restartButton.disabled = true;
});

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (gameEnd) {
      return;
    }
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        gameEnd = true;
        alert(`${currentPlayer} es el ganador!`);
        restartButton.disabled = false;
      } else if (checkTie()) {
        gameEnd = true;
        alert("Excelente juego, es un empate!");
        restartButton.disabled = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

function checkWin() {
  return winConditions.some(condition => {
    return condition.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkTie() {
  return Array.from(cells).every(cell => {
    return cell.textContent !== "";
  });
}
