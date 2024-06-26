

const game = document.getElementById("wraper"); //game
const title = document.getElementById("title"); //title
const score = document.getElementById("actual-score");
const highScore = document.getElementById("high-score");
let gameScore = 0;
let gamehighScore = 0;



const body = document.querySelector("body");
const backToMenu = document.createElement("a");
backToMenu.classList.add("GameBtn");
backToMenu.textContent = "Back to menu";
backToMenu.href = "/";
body.appendChild(backToMenu);

const goButton = document.createElement("button");
goButton.classList.add("button_start");
goButton.textContent = "Go";
game.appendChild(goButton);
const gameContainer = document.createElement("div"); //game container
//start game
goButton.addEventListener("click", () => {
  
  game.innerHTML = "";
  
  score.innerHTML = "Actual score :  " + 0;
  highScore.innerHTML = "High score :  " + gamehighScore;
  initGame();
  
});

//function finish game
let finish = false;
function finishGame(winOrLose = null,messages = "") {
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
          case 'win':
              console.log('GG you won !');
              textfinish.textContent = 'GG you won !';
              
              finish = true;
              break;
          case 'lose':
                  console.log('Nooo you lose !');
                  textfinish.textContent = 'Nooo you lose !';
                  break;
          case 'score':
              console.log('not lose not win !');
              break;
          default:
              console.log('Error');
              textfinish.textContent = 'Error !!'
              break;
      }
      textfinish.textContent += messages;
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
