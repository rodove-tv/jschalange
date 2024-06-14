const gameName = "TicTacToe";
gameContainer.classList.add('game_TicTacToe')
let currentPlayer = 'X';
let message = document.createElement('div');
let grid = document.createElement('div');
let scoreX = 0;
let scoreO = 0;

function initGame() {
    finish = false;
    game.appendChild(gameContainer);
    grid = document.createElement('div');
    grid.classList.add('grid_TicTacToe'); 
    gameContainer.appendChild(grid);
    message = document.createElement('div');
    message.id = 'message_TicTacToe';
    gameContainer.appendChild(message);
    currentPlayer = 'X';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell_TicTacToe");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener("click", handleCellClick);
      grid.appendChild(cell);
    }
  }
}

function handleCellClick(event) {
  const cell = event.target;
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    if (checkWin()) {
      if (currentPlayer === 'X') {
        scoreX++;
      }else{
        scoreO++;
      }
      if (scoreX > scoreO){
        highScore.innerHTML = "High score X:  " + scoreX;
        score.innerHTML = "Score O:  " + scoreO;
      }else{
        highScore.innerHTML = "High score O:  " + scoreO;
        score.innerHTML = "Score X:  " + scoreX;
      }
      finishGame("win","Le joueur "+currentPlayer+" a gagné !");
    } else if (checkDraw()) {
      finishGame("score","équality !");
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.textContent = `It's the player's turn ${currentPlayer}`;
    }
  }
}


function checkWin() {
  const cells = document.querySelectorAll(".cell_TicTacToe");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombos.some((combo) => {
    const [a, b, c] = combo;
    return (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    );
  });
}

function checkDraw() {
  const cells = document.querySelectorAll(".cell_TicTacToe");
  return Array.from(cells).every((cell) => cell.textContent);
}

title.textContent = gameName;