const http = require('http');
const fs = require('fs');
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://${req.headers.host}`);
    const endpoint = urlParams.pathname;

    if (endpoint === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if (endpoint === '/numero') {
        const numero = parseInt(urlParams.searchParams.get('numero'));
        verificarNumero(numero, numeroAleatorio);
    }
});

function verificarNumero(numero, numeroAleatorio) {
    if (numero > numeroAleatorio) {
        tentativas++;

        if (tentativas >= 5){
            fs.readFile('derrota.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            });
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('O numero e maior que o numero aleatorio.');
        }
    }
    
    else if (numero < numeroAleatorio){
        tentativas++;
        
        if (tentativas >= 5){
            fs.readFile('derrota.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            });
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('O numero e menor que o numero aleatorio.');
        }

    }
    else {
        fs.readFile('vitoria.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
}
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});