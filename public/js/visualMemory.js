
//initailisation
//button start game
const goButton = document.createElement('button');

let colors = ['red','darkmagenta', 'blue','aqua', 'green','chartreuse', 'yellow','black','gray', 'pink'];//colors cards
const game = document.getElementById('wraper');//game
const gameContainer = document.createElement('div');//game container
gameContainer.classList.add('game_visualMemory');
const scoreHeader = document.getElementById('scoreHeader');//score header
const actualScore = document.getElementsByClassName('actual-score');//score
let nb=0;//score
let secondes = 30; //time of the game
const timer = document.createElement('div');// div timer
timer.id = 'timer';
const time_text = document.createElement('span');//time text
time_text.textContent = 'Time : ' +secondes +'s';
//cartre selection
let firstCard = null;
let secondCard = null;




colors = colors.flatMap(color => [color, color]);//double colors
colors.sort(() => Math.random() - 0.5);//random colors

actualScore.textContent = 'score :' + nb;
timer.appendChild(time_text);
scoreHeader.appendChild(timer);

goButton.classList.add('button_start');
goButton.textContent = 'Go';
game.appendChild(goButton);

//create memory card
function initGame() {
    nb=0;//score
    firstCard = null;
    secondCard = null;
    function createMemoryCard(color) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundColor = color;
        card.dataset.color = color;
        return card;
    }
    //create cards
    for (let i = 0; i < colors.length; i++) {
        const card = createMemoryCard(colors[i]);
        gameContainer.appendChild(card);
        
    }
}


//start game
goButton.addEventListener('click', () => {
    game.innerHTML = '';
    initGame();
    game.appendChild(gameContainer);
    window.setTimeout(() => {
        hideColors();
        startTimer(30);
       
    }, 3000);
});

//function hide colors
function hideColors() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundColor = 'white';
        card.addEventListener('click', () => handleCardClick(card));
    });
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
            finishGame('lose');
        }
    }, 1000);
}





//function manage color egal or not
function handleCardClick(card) {
    if (card.style.visibility === 'hidden' || card === firstCard || card === secondCard) {
        return;
    }
    if (firstCard === null) {
        firstCard = card;
        card.style.border = '2px solid white';
        firstCard.style.backgroundColor = firstCard.dataset.color;
    } else if (secondCard === null) {
        secondCard = card;
        secondCard.style.border = '2px solid white';
        secondCard.style.backgroundColor = secondCard.dataset.color;
        if (firstCard.dataset.color === secondCard.dataset.color) {
            window.setTimeout(function() {
                firstCard.style.visibility = 'hidden';
                secondCard.style.visibility = 'hidden';  
                firstCard = null;
                secondCard = null; 
                nb+=1;
                actualScore.textContent = 'score :' + nb;
                if (nb == colors.length / 2) {
                    finishGame('win');
                }
            }, 500);        
            
        }else {
            window.setTimeout(function() {
                console.log('carttes not match');
                    firstCard.style.backgroundColor = 'white';
                    secondCard.style.backgroundColor = 'white';
                    firstCard.style.border = 'solid 1px black';
                    secondCard.style.border = 'solid 1px black';
                    firstCard = null;
                    secondCard = null;
                }, 500);

            }
        
        
    }
}





let finish = false;
//fonction de fin de partie 
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
        game.appendChild(finishGame);
        
        
        finishGame.appendChild(textfinish);
        finishGame.appendChild(resetarteButton);
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
                break;
        }
    }
}

function scorer(){
    const score = document.createElement('div');
    score.classList.add('score');
    game.appendChild(score);
    const textScore = document.createElement('p');
    textScore.textContent = 'Score : ';
    const scoreValue = document.createElement('span');
    scoreValue.textContent = '0';
    score.appendChild(textScore);
    score.appendChild(scoreValue);
    return scoreValue;
}



//ce qu'il reste a faire gere les score