const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
    if (req.url === '/seg'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Segunda-feira: Arroz, Feijão, Carne');
    }
    else if (req.url === '/ter'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Terça-feira: Arroz, Feijão, Batata');
    }
    else if (req.url === '/qua'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Quara-feira: Arroz, Feijão, Salada');
    }
    else if (req.url === '/qui'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Quinta-feira: Arroz, Feijão, Ovo');
    }
    else if (req.url === '/sex'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Sexta-feira: Arroz, Feijão, Purê');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'})
        res.end('Dia não encontrado');
    }
});

const porta = 3000;

servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});