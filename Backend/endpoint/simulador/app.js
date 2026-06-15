const http = require('http');

const servidor = http.createServer((req, res) => {
    if (req.url === '/login'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Login realizado com sucesso');
    }
    else if (req.url === '/dashboard'){
        res.writeHead(401, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Acesso negado, faça login primeiro');
    }
    else if (req.url === '/admin'){
        res.writeHead(403, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Voce nao tem permissao para acessar esta area')
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('pagina encontrada');
    }
});