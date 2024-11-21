const game = document.getElementById("wraper"); //game
const title = document.getElementById("title"); //title
const score = document.getElementById("actual-score");
const highScore = document.getElementById("high-score");
let gameScore = 0;
let gamehighScore = 0;

const goButton = document.createElement("button");
goButton.classList.add("button_start");
goButton.textContent = "Go";
game.appendChild(goButton);
const gameContainer = document.createElement("div"); //game container

//start game
goButton.addEventListener("click", () => {
  game.innerHTML = "";
  gameScore = 0;
  score.innerHTML = "Actual score :  " + 0;
  highScore.innerHTML = "High score :  " + gamehighScore;
  initGame();
});

//function finish game
let finish = false;
function finishGame(winOrLose = null, messages = null) {
  if (gameScore > gamehighScore) {
    gamehighScore = gameScore;
    highScore.innerHTML = "High score :  " + gamehighScore;
  }
  if (finish !== true) {
    game.innerHTML = "";
    gameContainer.innerHTML = "";

    const textfinish = document.createElement("p");
    const looseText = document.createElement("p");

    looseText.classList.add("looseText");
    textfinish.classList.add("restatBtnText");
    looseText.textContent = "Restart";
    textfinish.textContent = "Ouch, you lost !";
    const finishGameBtn = document.createElement("button");
    finishGameBtn.classList.add("finishGame");

    finishGameBtn.appendChild(textfinish);
    finishGameBtn.appendChild(looseText);

    game.appendChild(finishGameBtn);

    finishGameBtn.addEventListener("click", () => {
      game.innerHTML = "";
      game.appendChild(goButton);
    });
    switch (winOrLose) {
      case "win":
        console.log("GG you won !");
        textfinish.textContent = "GG you won !";

        finish = true;
        break;
      case "lose":
        console.log("You lose !");
        textfinish.textContent = "Nooo you lose !";
        break;
      case "hightScore":
        const higthScore = document.getElementsByClassName("hight-score");
        if (higthScore < actualScore) {
          textfinish.textContent = "GG you have supassed you score !";
          finish = true;
        } else {
          textfinish.textContent = "You dont exceed you score !";
        }
      default:
        console.log("Error");
        textfinish.textContent = "Error !!";
        break;
    }
    messages ? (textfinish.textContent += messages) : null;
  }
}

// lets you know that js must be launched on the page and executed
const urlParams = new URLSearchParams(window.location.search);
const fileName = urlParams.get("file");
if (fileName && fileName !== "null") {
  const scriptElement = document.createElement("script");
  scriptElement.src = `/js/${fileName}.js`;
  scriptElement.defer = true;
  console.log(`la balise ${fileName} est corectement crée`);
  document.body.appendChild(scriptElement);
} else {
  console.log("no file");
  window.location.href = "/error";
}
