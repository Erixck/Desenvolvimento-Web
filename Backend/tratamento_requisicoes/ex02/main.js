const http = require('http');

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://${req.headers.host}`);
    const endpoint = urlParams.pathname;

    if (endpoint === '/sobre'){
        const idade = parseInt(urlParams.searchParams.get('idade')) || 'desconhecida';
        const nome = urlParams.searchParams.get('nome') || 'Visitante';
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        if (idade >= 18){
            res.end(`Ola ${nome}, voce tem ${idade} anos e voce é maior de idade.`);
        }
        else{
            res.end(`Ola ${nome}, voce tem ${idade} anos e voce não é maior de idade.`);
        }
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
