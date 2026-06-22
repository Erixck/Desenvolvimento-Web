const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://${req.headers.host}`);
    const endpoint = urlParams.pathname;

    if (endpoint === '/cor'){
        const cor = urlParams.searchParams.get('cor') || 'desconecido';
        returnColor(cor, res);
    }

});

function returnColor(cor, res){
    if (cor === 'red'){
        fs.readFile('red.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if (cor === 'blue'){
        fs.readFile('blue.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if (cor === 'green'){
        fs.readFile('green.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else {
        fs.readFile('error.html', (err, data) => {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
}
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});