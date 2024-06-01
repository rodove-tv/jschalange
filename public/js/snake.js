const gameboard = document.getElementById("wraper");

let food = addFood();
let snake = [{ x: 10, y: 10 }];
let direction = "up";
let gameStatus;
let gameInterval;
let interval = 150;
let score = 0;
let hightScore = 0;

// event listener for key press
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
  }
});

/* --------------------- Draw Functions --------------------- */

function clearSnake() {
  const snakeElements = document.querySelectorAll(".snake");
  snakeElements.forEach((element) => element.remove());
}
function clearFood() {
  const foodElement = document.querySelector(".food");
  if (foodElement) foodElement.remove();
}

// draw the snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setElementposition(snakeElement, segment);
    gameboard.appendChild(snakeElement);
  });
}

// draw the food
function drawFood() {
  const foodElement = createGameElement("div", "food");
  setElementposition(foodElement, food);
  gameboard.appendChild(foodElement);
}

/* --------------------- Game Functions --------------------- */

// main game function
function game() {
  clearSnake();
  clearFood();
  checkowncolision();
  checkGameOver();
  drawFood();
  drawSnake();

  console.log("Snake.js loaded!");
}

function checkowncolision() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      endGame();
    }
  }
}

function endGame() {
  console.log("Game Over!");
  gameStatus = "over";
  clearInterval(gameInterval);
  if (score > hightScore) {
    hightScore = score;
    document.getElementById("hight-score").innerText = hightScore;
  }
  return;
}

function checkGameOver() {
  head = { ...snake[0] };
  if (head.x < 1 || head.x > 20 || head.y < 1 || head.y > 20) {
    endGame();
  }
}

function initGame() {
  console.log("initGame() called!");
  gameStatus = "running";
  game();
  interval = 150;
  gameInterval = setInterval(() => {
    moveSnake();
    game();
  }, interval);
}

// move the snake
function moveSnake() {
  const head = { ...snake[0] };
  switch (direction) {
    case "left":
      head.x--;
      break;
    case "up":
      head.y--;
      break;
    case "right":
      head.x++;
      break;
    case "down":
      head.y++;
      break;
  }
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    food = addFood();
    score++;
    clearInterval(gameInterval);
    if (interval > 40) {
      interval -= 10;
    } else if (interval > 20) {
      interval--;
    }

    gameInterval = setInterval(() => {
      moveSnake();
      game();
      checkGameOver();
    }, interval);
  } else {
    snake.pop();
  }
}

// add food into the game
function addFood() {
  const x = Math.floor(Math.random() * 20) + 1;
  const y = Math.floor(Math.random() * 20) + 1;
  return { x, y };
}

/* --------------------- Helper Functions --------------------- */

// set the position of the element
function setElementposition(element, position) {
  element.style.gridRowStart = position.y;
  element.style.gridColumnStart = position.x;
}

// create elelemnt for the game into html
function createGameElement(element, className) {
  const gameElement = document.createElement(element);
  gameElement.className = className;
  return gameElement;
}

console.log("Snake.js loaded!");
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGame);
} else if (gameStatus !== "running") {
  initGame();
}
