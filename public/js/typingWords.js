const gameName = "Typing words";

gameContainer.classList.add('game_typingWords');
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

const sentencesArray = [
    "She loves to travel and explore new places.",
    "The baby laughed when he saw the colorful balloons.",
    "They enjoyed a picnic by the river on a sunny afternoon.",
    "He painted his room a bright shade of blue.",
    "The students were excited for their summer vacation.",
    "She discovered a hidden talent for singing.",
    "He rides his bike to work every day.",
    "The flowers in the garden are blooming beautifully.",
    "She bought a new laptop for her online classes.",
    "They celebrated their victory with a big party.",
    "The dog wagged its tail happily when it saw its owner.",
    "She started a new job at a tech company.",
    "The children built a snowman in the front yard.",
    "He enjoys cooking Italian cuisine on weekends.",
    "They went to the theater to watch a new play.",
    "The train journey through the mountains was scenic.",
    "She hosted a book club meeting at her house.",
    "He planted trees in the community park.",
    "The sunset over the ocean was breathtaking.",
    "She enjoys running early in the morning.",
    "They visited an art gallery and admired the paintings.",
    "The car broke down on the way to the beach.",
    "He took a photography class to improve his skills.",
    "She enjoys gardening and growing her own vegetables.",
    "They went fishing on the lake and caught a big fish."
];

// Function to shuffle the sentencesArray
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let sentince = shuffleArray(sentencesArray).join(' ');
const input = document.createElement('input');
input.type = 'text';
input.classList.add('input_typingWords');
const phraseContainer=document.createElement('div');


function initGame() {
    gameScore = 0;
    sentince = shuffleArray(sentencesArray).join(' ');
    input.value = '';
    arrayLetters = sentince.split("");
    game.appendChild(gameContainer);
    gameContainer.appendChild(phraseContainer);
    gameContainer.appendChild(input);
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
            const lettersPerSecondCorrect = gameScore / 30;
            console.log("Letters per second: " + lettersPerSecondCorrect);
            finishGame('score',"Letters per second:"+lettersPerSecondCorrect);
        }
    }, 1000);
}
// Function to shuffle the array
let arrayLetters = sentince.split("");
function updateDisplay() {
    let inputLength = input.value.length;
    let startIndex = inputLength > 3 ? inputLength - 3 : 0;
    let visiblePart = sentince.slice(startIndex, startIndex + 12);
    phraseContainer.textContent = '';

    visiblePart.split('').forEach(letter => {
        let span = document.createElement('span');
        span.classList.add('letter_typingWords');
        span.textContent = letter;
        phraseContainer.appendChild(span);
    });

    colorLetters(startIndex);
}
// Check if the word is correct
function checkWord() {
    if (input.value.toLowerCase() === sentince.slice(0, input.value.length)) {
        sentince += input.value;
        arrayLetters = sentince.split(''); // Update the arrayLetters with the new phrase
    }

    updateDisplay();
}
//function finish game
function colorLetters(startIndex) {
    let inputLetters = input.value.split('');
    let spans = phraseContainer.getElementsByTagName('span');

    for (let i = 0; i < arrayLetters.length; i++) {
        if (inputLetters[i + startIndex] === undefined) {
            continue;
        } else if (inputLetters[i + startIndex] === arrayLetters[i + startIndex]) {
            console.log(inputLetters[i + startIndex], arrayLetters[i + startIndex]);
            spans[i].style.color = 'white';
            spans[i].style.background = 'green';
            gameScore++;
            score.textContent = "number letters true :  " + gameScore;
        } else {
            console.log(inputLetters[i + startIndex], arrayLetters[i + startIndex]);
            spans[i].style.color = 'black';
            spans[i].style.background = 'red';
        }
    }
}



title.textContent = gameName;