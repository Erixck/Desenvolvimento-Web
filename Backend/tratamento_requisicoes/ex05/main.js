const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://${req.headers.host}`);
    const endpoint = urlParams.pathname;

    if (endpoint === '/'){
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if (endpoint === '/guess'){
        const numero = urlParams.searchParams.get('numero');

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`voce enviou o numero: ${numero}`);
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

