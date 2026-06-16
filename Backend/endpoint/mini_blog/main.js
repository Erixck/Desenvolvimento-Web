const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
    if (req.url === '/'){
        fs.readFile('index.html', (erro, dados) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(dados);
        })
    }
    else if (req.url === '/post1'){
        fs.readFile('post1.html', (erro, dados) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(dados);
        })
    }
    else if (req.url === 'post2'){
        fs.readFile('post2.html', (erro, dados) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(dados);
        })
    }
    else {
        fs.readFile('erro.html', (erro, dados) => {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(dados);
        })
    }
});

const porta = 3000;

servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});