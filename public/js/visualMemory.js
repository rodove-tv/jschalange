const cart = document.createElement('div');
cart.classList.add('cart_memory');
let winningCount = 1; // Initialiser avec une carte gagnante
let correctClicks = 0; // Suivre le nombre de clics corrects
let numberOfCards = 9;
let gridSize = Math.ceil(Math.sqrt(numberOfCards));
function initGame() {
    gameContainer.innerHTML = '';
    gameContainer.classList.add('gameContainer_memory');
    game.appendChild(gameContainer);
    correctClicks = 0; 
    let positions = [...Array(numberOfCards).keys()]; // Créez un tableau de 9 éléments avec des valeurs de 0 à 8
    positions = shuffleArray(positions); 
    let winningIndices = [];
    for (let i = 0; i < winningCount; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * numberOfCards);
        } while (winningIndices.includes(randomIndex)); // Assurez-vous que les indices gagnants sont uniques
        winningIndices.push(randomIndex);
    }

    gridSize = Math.ceil(Math.sqrt(numberOfCards));
    gameContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gameContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < numberOfCards; i++) {
        // Calculer la taille de la grille
        const card = cart.cloneNode(true);
        card.dataset.cardId = positions[i];
        card.style.backgroundColor = 'grey';
        card.addEventListener('click', handleCardClick);
        gameContainer.appendChild(card);
        if (winningIndices.includes(positions[i])) { // Utiliser positions[i] pour vérifier si c'est une carte gagnante
            card.dataset.winning = "true";
        }
    }

    document.querySelectorAll('[data-winning="true"]').forEach(card => {
        card.style.backgroundColor = 'white';
    });
    setTimeout(() => {
        document.querySelectorAll('.cart_memory').forEach(card => card.style.backgroundColor = 'grey');
    }, 1500);

    canClick = true;
}

function handleCardClick(event) {
    if (!canClick) return;
    const card = event.target.closest('.cart_memory');
    if (card.dataset.winning) {
        correctClicks++;
        card.style.backgroundColor = 'green'; // Optionnel : marquer visuellement les clics corrects
        if (correctClicks === winningCount) {
            
            if (!(winningCount < document.querySelectorAll('.cart_memory').length/ 2)) {
                numberOfCards+= gridSize*2+1
            }
            winningCount++;
            setTimeout(() => {
                initGame(); // Commencer un nouveau jeu avec plus de cartes gagnantes
            }, 500);
        }
    } else {
        card.style.backgroundColor = 'red';
        if (document.querySelectorAll('.cart_memory[style="background-color: red;"]').length >= 3) {
            numberOfCards = 9;
            winningCount = 1; // Initialiser avec une carte gagnante
            finishGame('lose');
            // Code pour terminer le jeu ou effectuer une action spécifique en cas de défaite
        }
        // Optionnel : Réinitialiser le jeu ou marquer la carte incorrecte
    }
}

// Assurez-vous d'inclure la fonction shuffleArray si elle n'est pas déjà définie
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
