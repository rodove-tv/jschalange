const timer = document.createElement('div');// div timer
timer.id = 'timer';
const time_text = document.createElement('span');//time text
let secondes = 30; //time of the game
const scoreHeader = document.getElementById('scoreHeader');//score header
const actualScore = document.getElementsByClassName('actual-score');//score
time_text.textContent = 'Time : ' +secondes +'s';
timer.appendChild(time_text);
scoreHeader.appendChild(timer);




gameContainer.classList.add('game_crosswords');
const phrase = "pain, lait, fromage, houmous, nouilles";
const input = document.createElement('input');
input.type = 'text';


gameContainer.appendChild(document.createTextNode(phrase));
gameContainer.appendChild(input);


function initGame() {
    game.appendChild(gameContainer);
    input.addEventListener('input', checkWord);
    startTimer(30);
}

//function start timer
function startTimer(duration) {
    secondes = duration;
    time_text.textContent = 'Time : ' +secondes +'s';
    const chrono = setInterval(() => {
        secondes--;
        time_text.textContent = 'Time : ' +secondes +'s';
        if (secondes === 0) {
            clearInterval(chrono);
            finishGame();
        }
    }, 1000);
}

// Convertir la phrase en tableau de lettres
let arrayLetters = phrase.split('');

// Créer un span pour chaque lettre et l'ajouter à gameContainer
arrayLetters.forEach(letter => {
    let span = document.createElement('span');
    span.textContent = letter;
    gameContainer.appendChild(span);
});

function checkWord() {
    let inputLetters = input.value.toLowerCase().split('');
    let spans = gameContainer.getElementsByTagName('span');

    for (let i = 0; i < inputLetters.length; i++) {
        if (inputLetters[i] === arrayLetters[i]) {
            spans[i].style.color = 'green';
        } else {
            spans[i].style.color = 'red';
        }
    }
    if (input.value.toLowerCase() === phrase) {
        finishGame('win');
    }
}
