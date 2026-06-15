const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    if (req.url === '/info') {
        res.writeHead(100, {'Content-Type': 'text/plain'});
        res.end('Codigo 100 - Continue');
    }

    else if (req.url === '/sucesso') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Codigo 200 - OK');
    }

    else if (req.url === '/redirecionar') {
        res.writeHead(301, {
            'Location': '/sucesso'
        });
        res.end();
    }

    else if (req.url === '/erro-cliente') {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Codigo 404 - Not Found');
    }

    else if (req.url === '/erro-servidor') {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Codigo 500 - Internal Server Error');
    }

    else {
    fs.readFile('404.html', (erro, dados) => {

        if (erro) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro ao carregar a pagina 404');
            return;
        }

        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(dados);
    });
}

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})});