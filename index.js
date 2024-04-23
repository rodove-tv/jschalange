const express = require('express');
const path = require('path');
const app = express();

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});
app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'error.html'));
});

const PORT = 5555;

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port http://localhost:${PORT}`);
});