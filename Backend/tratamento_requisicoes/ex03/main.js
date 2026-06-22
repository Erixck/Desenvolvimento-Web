const http = require('http');

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://${req.headers.host}`);
    const endpoint = urlParams.pathname;

    if (endpoint === '/email'){
        const email = urlParams.searchParams.get('email') || 'desconecido';
        if (email === 'admin@etefmc.com.br'){
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Acesso concedido.');
        }
        else{
            res.writeHead(403, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Acesso negado.');
        }
    }

});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
