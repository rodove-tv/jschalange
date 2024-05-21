
let colors = ['red','darkmagenta', 'blue','aqua', 'green','chartreuse', 'yellow','black','gray', 'pink'];
let nb=0;

colors = colors.flatMap(color => [color, color]);

colors.sort(() => Math.random() - 0.5);

const game = document.getElementById('wraper');
const gameContainer = document.createElement('div');
gameContainer.classList.add('game_visualMemory');
game.appendChild(gameContainer);

function createMemoryCard(color) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = color;
    card.dataset.color = color;
    return card;
}

for (let i = 0; i < colors.length; i++) {
    const card = createMemoryCard(colors[i]);
    card.addEventListener('click', () => handleCardClick(card));
    gameContainer.appendChild(card);
}

gameContainer.style.display = 'none';
const goButton = document.createElement('button');
goButton.textContent = 'Go';
goButton.classList.add('button_visualMemory');
game.appendChild(goButton);


goButton.addEventListener('click', () => {
    goButton.style.display = 'none';
    gameContainer.style.display = 'grid';
    window.setTimeout(hideColors, 3000);
    function hideColors() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = 'white';
        });
    }
});

let firstCard = null;
let secondCard = null;

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
        card.style.border = '2px solid white';
        secondCard.style.backgroundColor = secondCard.dataset.color;
        if (firstCard.dataset.color === secondCard.dataset.color) {
            firstCard.style.visibility = 'hidden';
            secondCard.style.visibility = 'hidden';         
            nb+=1;
            if (nb==colors.length/2){
                finishGame('win');
            }
        }else {
                console.log('Les cartes ne correspondent pas');
                    firstCard.style.backgroundColor = 'white';
                    secondCard.style.backgroundColor = 'white';
            }
        
        firstCard.style.border = 'solid 1px black';
        secondCard.style.border = 'solid 1px black';
        firstCard = null;
        secondCard = null;
    }
}

const cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', () => handleCardClick(card));
}



function checkRemainingCards() {
    let remainingCards = Array.from(document.getElementsByClassName('card'));
    if (remainingCards.length === 0) {
        console.log("Toutes les cases sont colorées !");
    } else {
        console.log("Il reste des cases colorées.");
    }
}

function finishGame(winOrLose){
    gameContainer.style.display = 'none';
    const finishGame = document.createElement('div');
    finishGame.classList.add('finishGame');
    const resetarteButton = document.createElement('button');
    resetarteButton.textContent = 'Resetarte';
    resetarteButton.classList.add('resetarteButton');
    game.appendChild(finishGame);
    const textfinish = document.createElement('p');
    
    finishGame.appendChild(textfinish);
    finishGame.appendChild(resetarteButton);
    resetarteButton.addEventListener('click', () => {
        location.reload();
    });
    switch (winOrLose) {
        case 'win':
            console.log('GG you win !');
            textfinish.textContent = 'GG you win !';
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