const game = document.getElementById('wraper');//game
const goButton = document.createElement('button');
goButton.classList.add('button_start');
goButton.textContent = 'Go';
game.appendChild(goButton);
const gameContainer = document.createElement('div');//game container



//start game
goButton.addEventListener('click', () => {
  game.innerHTML = '';
  initGame();
});



//function finish game
let finish = false;
function finishGame(winOrLose){
  if (finish !== true){
      game.innerHTML = '';
      gameContainer.innerHTML = '';

      const finishGame = document.createElement('div');
      finishGame.classList.add('finishGame');
      const textfinish = document.createElement('p');
      const resetarteButton = document.createElement('button');
      resetarteButton.classList.add('resetarteButton');
      resetarteButton.textContent = 'Resetarte';

      finishGame.appendChild(textfinish);
      finishGame.appendChild(resetarteButton);
      game.appendChild(finishGame);

      resetarteButton.addEventListener('click', () => {
          game.innerHTML = '';
          game.appendChild(goButton);
      });

      switch (winOrLose) {
          case 'win':
              console.log('GG you win !');
              textfinish.textContent = 'GG you won !';
              finish = true;
              break;
          case 'lose':
              
              
                  console.log('You lose !');
                  textfinish.textContent = 'Nooo you lose !';
                  break;
          default:
              console.log('Error');
              textfinish.textContent = 'Error !!'
              break;
      }
  }
}



// lets you know that js must be launched on the page and executed
const urlParams = new URLSearchParams(window.location.search);
const fileName = urlParams.get('file');
if (fileName && fileName !== 'null') {
  const scriptElement = document.createElement('script');
  scriptElement.src = `/js/${fileName}.js`;
  scriptElement.defer = true;
  console.log(`la balise ${fileName} est corectement crée`);
  document.body.appendChild(scriptElement);
} else {
  console.log('no file');
  window.location.href = '/error';
}