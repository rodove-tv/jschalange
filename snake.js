const container = document.getElementById("game");
const canva = document.createElement("div");
const border = document.createElement("div");
container.appendChild(border);
border.appendChild(canva);

/*------------------------style------------------------*/
border.style.aspectRatio = "4/3";
border.style.height = "100%";
border.style.border = "5px solid black";
border.style.boxShadow = "inner 0 0 10px black";
canva.style.backgroundColor = "grey";
canva.style.display = "grid";
canva.style.width = "100%";
canva.style.height = "100%";
canva.style.gridTemplateColumns = "repeat(20, 1fr)";
canva.style.gridTemplateRows = "repeat(20, 1fr)";

/*------------------------snake------------------------*/

const snake = [(x = 10), (y = 10)];
let direction = "right";
let score = 0;
let speed = 200;
let gameover = false;

function draw() {
  canva.innerHTML = ""; //reset board
  drawSnake();
}

function drawSnake() {
  snake.forEach(() => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumn = snake[0];
    snakeElement.style.gridRow = snake[1];
    snakeElement.style.backgroundColor = "black";
    canva.appendChild(snakeElement);
  });
}

function move() {
  addEventListener("keydown", (direction) => {
    switch (direction) {
      case "up":
        snake[1]--;
        break;
      case "down":
        snake[1]++;
        break;
      case "left":
        snake[0]--;
        break;
      case "right":
        snake[0]++;
        break;
    }
  });
}

drawSnake();
