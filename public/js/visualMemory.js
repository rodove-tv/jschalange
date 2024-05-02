// Tableau des couleurs disponibles
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

// Générer une couleur aléatoire
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Créer une carte de mémoire
function createMemoryCard(color) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = color;
    return card;
}

// Ajouter les cartes de mémoire à la div avec l'id "wraper"
const coucouDiv = document.getElementById('wraper');

for (let i = 0; i < 8; i++) {
    const color = getRandomColor();
    const card = createMemoryCard(color);
    coucouDiv.appendChild(card);
}
// Variables pour stocker les cartes sélectionnées
let firstCard = null;
let secondCard = null;
// Fonction pour gérer le clic sur une carte
function handleCardClick(card) {
    // Vérifier si la carte est déjà invisible
    if (card.style.visibility === 'hidden') {
        return;
    }
    
    // Vérifier si c'est la première carte sélectionnée
    if (firstCard === null) {
        firstCard = card;
        card.style.border = '2px solid white'; // Ajouter un style pour indiquer la sélection
    } else if (secondCard === null) {
        secondCard = card;
        card.style.border = '2px solid white'; // Ajouter un style pour indiquer la sélection
        
        // Vérifier si les deux cartes sélectionnées ont la même couleur
        if (firstCard.style.backgroundColor === secondCard.style.backgroundColor) {
            // Les cartes sont de la même couleur, les rendre invisibles
            firstCard.style.visibility = 'hidden';
            secondCard.style.visibility = 'hidden';
        } else {
            // Les cartes sont de couleurs différentes, les réinitialiser
            setTimeout(() => {
                firstCard.style.border = 'none';
                secondCard.style.border = 'none';
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
    // Ajouter un style pour indiquer la sélection
    card.style.boxShadow = '0 0 5px blue';
}


// Fonction pour gérer le clic sur une carte
function handleCardClick(card) {
    // Vérifier si la carte est déjà invisible
    if (card.style.visibility === 'hidden') {
        return;
    }
    
    // Vérifier si c'est la première carte sélectionnée
    if (firstCard === null) {
        firstCard = card;
        card.style.border = '2px solid white'; // Ajouter un style pour indiquer la sélection
    } else if (secondCard === null) {
        secondCard = card;
        card.style.border = '2px solid white'; // Ajouter un style pour indiquer la sélection
        
        // Vérifier si les deux cartes sélectionnées ont la même couleur
        if (firstCard.style.backgroundColor === secondCard.style.backgroundColor) {
            // Les cartes sont de la même couleur, les rendre invisibles
            firstCard.style.visibility = 'hidden';
            secondCard.style.visibility = 'hidden';
        } else {
            // Les cartes sont de couleurs différentes, les réinitialiser
            setTimeout(() => {
                firstCard.style.border = 'none';
                secondCard.style.border = 'none';
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
}

// Ajouter un gestionnaire d'événement pour chaque carte
const cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', () => handleCardClick(card));
}



function checkRemainingCards() {
    let remainingCards = document.getElementsByClassName('card');
    if (remainingCards.length === 0) {
        console.log("Toutes les cases sont colorées !");
    } else {
        console.log("Il reste des cases colorées.");
    }
    }
    