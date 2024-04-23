document.addEventListener('DOMContentLoaded', function() {
    const game = document.getElementById('game');

    // Créer la grille de jeu
    const grid = document.createElement('div');
    grid.classList.add('grid');
    game.appendChild(grid);

    // Créer le message
    const message = document.createElement('div');
    message.id = 'message';
    game.appendChild(message);

    let currentPlayer = 'X'; // Joueur en cours

    // Créer les cellules de la grille
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);
            grid.appendChild(cell);
        }
    }

    // Gérer le clic sur une cellule
    function handleCellClick(event) {
        const cell = event.target;
        if (!cell.textContent) { // Vérifier si la cellule est vide
            cell.textContent = currentPlayer; // Placer le symbole du joueur
            if (checkWin()) {
                message.textContent = `Le joueur ${currentPlayer} a gagné !`;
                grid.removeEventListener('click', handleCellClick);
            } else if (checkDraw()) {
                message.textContent = "Match nul !";
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Changer de joueur
                message.textContent = `C'est le tour du joueur ${currentPlayer}`;
            }
        }
    }

    // Vérifier s'il y a un gagnant
    function checkWin() {
        const cells = document.querySelectorAll('.cell');
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // colonnes
            [0, 4, 8], [2, 4, 6] // diagonales
        ];
        return winningCombos.some(combo => {
            const [a, b, c] = combo;
            return cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent;
        });
    }

    // Vérifier s'il y a un match nul
    function checkDraw() {
        const cells = document.querySelectorAll('.cell');
        return Array.from(cells).every(cell => cell.textContent);
    }
});