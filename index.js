const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Bonjour, monde !\n');
});

const PORT = 5555;

server.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port http://localhost:${PORT}`);
});