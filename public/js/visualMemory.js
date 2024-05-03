// Tableau des couleurs disponibles
let colors = ['red','darkmagenta', 'blue','aqua', 'green','chartreuse', 'yellow','black','gray', 'purple', 'orange'];
let nb=0;
// Dupliquez chaque couleur pour garantir une paire
colors = colors.flatMap(color => [color, color]);

// Mélangez le tableau
colors.sort(() => Math.random() - 0.5);

// Ajouter les cartes de mémoire à la div avec l'id "wraper"
const game = document.getElementById('wraper');

// Créer une carte de mémoire
function createMemoryCard(color) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = 'white';
    card.dataset.color = color;
    return card;
}

for (let i = 0; i < colors.length; i++) {
    const card = createMemoryCard(colors[i]);
    card.addEventListener('click', () => handleCardClick(card));
    game.appendChild(card);
}


// Variables pour stocker les cartes sélectionnées et les cartes correspondantes
let firstCard = null;
let secondCard = null;


// Fonction pour gérer le clic sur une carte
function handleCardClick(card) {
    // Si la carte est déjà sélectionnée ou si elle est invisible, ne faites rien
    if (card.style.visibility === 'hidden' || card === firstCard || card === secondCard) {
        return;
    }
    
    // Vérifier si c'est la première carte sélectionnée
    if (firstCard === null) {
        firstCard = card;
        card.style.border = '2px solid white'; // Ajouter un style pour indiquer la sélection
        firstCard.style.backgroundColor = firstCard.dataset.color;
    } else if (secondCard === null) {
        secondCard = card;
        card.style.border = '2px solid white'; // Ajouter un style pour indiquer la sélection
        secondCard.style.backgroundColor = secondCard.dataset.color;
        // Vérifier si les deux cartes sélectionnées ont la même couleur
        if (firstCard.dataset.color === secondCard.dataset.color) {
            // Les cartes sont de la même couleur, les rendre invisibles
            
            firstCard.style.visibility = 'hidden';
            secondCard.style.visibility = 'hidden';
            // Vérifier si toutes les cartes ont été appariées
            
            nb+=1;
            //const allCards = Array.from(document.getElementsByClassName('card'));
            if (nb==colors.length/2){
                // Toutes les cartes ont été appariées, le joueur a gagné
                alert('Félicitations! Vous avez gagné le jeu!');
            }
        }else {
                console.log('Les cartes ne correspondent pas');
                // Les cartes ne correspondent pas, réinitialiser la sélection
                    firstCard.style.backgroundColor = 'white';
                    secondCard.style.backgroundColor = 'white';
            }
        
        firstCard.style.border = 'solid 1px black';
        secondCard.style.border = 'solid 1px black';
        // Réinitialiser les cartes sélectionnées
        firstCard = null;
        secondCard = null;
    }
}

// Ajouter un gestionnaire d'événement pour chaque carte
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