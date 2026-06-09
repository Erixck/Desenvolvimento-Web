const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (erro, dados) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(dados);
        });
    }

    else if (req.url === '/main.js') {
        fs.readFile('main.js', (erro, dados) => {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(dados);
        });
    }
    
    else {
        res.writeHead(404);
        res.end('Página não encontrada');
    }
});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});