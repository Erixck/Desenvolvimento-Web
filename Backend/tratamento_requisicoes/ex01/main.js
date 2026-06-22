const http = require('http');

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://${req.headers.host}`);
    const endpoint = urlParams.pathname;

    if (endpoint === '/') {
        const nome = urlParams.searchParams.get('nome') || 'Visitante';
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(`Ola, ${nome}!`);
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

