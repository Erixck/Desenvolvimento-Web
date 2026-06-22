const http = require('http');
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://${req.headers.host}`);
    const endpoint = urlParams.pathname;

    if (endpoint === '/numero') {
        const numero = urlParams.searchParams.get('numero');
        if (numero > numeroAleatorio) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('O numero e maior que o numero aleatorio.');
        }
        else if (numero < numeroAleatorio) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('O numero e menor que o numero aleatorio.');
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Parabéns! Voce acertou o numero aleatorio!');
        }
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});