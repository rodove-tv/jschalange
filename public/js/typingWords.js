gameContainer.classList.add('game_crosswords');
const phrase = "une phrase"; // Replace with your desired phrase
const input = document.createElement('input');
input.type = 'text';
function initGame() {
game.appendChild(gameContainer);
input.addEventListener('input', checkphrase);
}
gameContainer.appendChild(document.createTextNode(phrase));
gameContainer.appendChild(document.createElement('br'));
gameContainer.appendChild(input);
function checkphrase() {
    if (input.value.toLowerCase() === phrase) {
        gameContainer.style.color = 'green';
        finishGame('win');
    }else{
        gameContainer.style.color = 'red';
    
    }
}
