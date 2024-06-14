
const gameName = "Visual Memory Card";

gameContainer.classList.add('game_visualMemory');
let colors = ['red','darkmagenta', 'blue','aqua', 'green','chartreuse', 'yellow','black','gray', 'pink'];//colors cards
let nb=0;//score
let secondes = 30; //time of the game
let chrono;
const timer = document.createElement('div');// div timer
const time_text = document.createElement('span');//time text
timer.id = 'timer';
time_text.textContent = 'Time : ' +secondes +'s';
timer.appendChild(time_text);
scoreHeader.appendChild(timer);

//cartre selection
let firstCard = null;
let secondCard = null;

colors = colors.flatMap(color => [color, color]);//double colors

//create memory card
function initGame() {
    nb=0;//score
    firstCard = null;
    secondCard = null;
    
    
    colors.sort(() => Math.random() - 0.5);//random colors'

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
    game.appendChild(gameContainer);
    window.setTimeout(() => {
        hideColors();
        startTimer(30);
    }, 3000);
}




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
    chrono = setInterval(() => {
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
            setTimeout(() => {
                firstCard.style.visibility = 'hidden';
                secondCard.style.visibility = 'hidden';  
                firstCard = null;
                secondCard = null; 
                gameScore+=1;
                score.textContent = "Actual score :  " + gameScore;
                if (gameScore == colors.length / 2) {
                    clearInterval(chrono);
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

title.textContent = gameName;