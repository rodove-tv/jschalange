const gameName = "TypingWords";
const timer = document.createElement("div"); // div timer
timer.id = "timer";
const time_text = document.createElement("span"); //time text
let secondes = 30; //time of the game
let chrono;
const scoreHeader = document.getElementById('scoreHeader');//score header
const actualScore = document.getElementsByClassName('actual-score');//score
time_text.textContent = 'Time : ' +secondes +'s';
timer.appendChild(time_text);
scoreHeader.appendChild(timer);




gameContainer.classList.add('game_typingWords');
let phrase = "pain, lait, fromage, houmous, nouilles";
const input = document.createElement('input');
input.type = 'text';

const phraseContainer=document.createElement('div');
gameContainer.appendChild(phraseContainer);
gameContainer.appendChild(input);

function initGame() {
    game.appendChild(gameContainer);
    input.addEventListener('input', checkWord);
    startTimer(30);
    updateDisplay();
}

//function start timer
function startTimer(duration) {
    secondes = duration;
    time_text.textContent = 'Time : ' + secondes + 's';
    chrono = setInterval(() => {
        secondes--;
        time_text.textContent = 'Time : ' + secondes + 's';
        if (secondes === 0) {
            clearInterval(chrono);
            finishGame('hightScore','but your scrore is : '+actualScore);
        }
    }, 1000);
}

// Convertir la phrase en tableau de lettres
let arrayLetters = phrase.split("");
function updateDisplay() {
    let inputLength = input.value.length;
    let startIndex = inputLength > 3 ? inputLength - 3 : 0;
    let visiblePart = phrase.slice(startIndex, startIndex + 12);
    phraseContainer.textContent = '';

    visiblePart.split('').forEach(letter => {
        let span = document.createElement('span');
        span.classList.add('letter_typingWords');
        span.textContent = letter;
        phraseContainer.appendChild(span);
    });

    colorLetters(startIndex);
}

function checkWord() {
    if (input.value.toLowerCase() === phrase.slice(0, input.value.length)) {
        phrase += ", " + input.value.toLowerCase();
        arrayLetters = phrase.split(''); // Update the arrayLetters with the new phrase
    }

    updateDisplay();
}
function colorLetters(startIndex) {
    let inputLetters = input.value.toLowerCase().split('');
    let spans = phraseContainer.getElementsByTagName('span');

    for (let i = 0; i < spans.length; i++) {
        if (inputLetters[i + startIndex] === arrayLetters[i + startIndex]) {
            spans[i].style.color = 'white';
            spans[i].style.background = 'green';
        } else {
            spans[i].style.color = 'white';
            spans[i].style.background = 'red';
        }
    }
}
