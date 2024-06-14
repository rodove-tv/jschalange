const express = require('express');
const path = require('path');
const app = express();

app.use(function(req, res, next) {
  if (req.originalUrl.endsWith('.js')) {
    res.type('application/javascript');
  }
  next();
});

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/home', (req, res) => {
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