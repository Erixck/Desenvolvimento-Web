const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const usuario = 'usuario';
const senha = 'senha';

let logado = false;

app.post('/login', (req, res) => {
    let usuarioDigitado = req.body.usuarioDigitado;
    let senhaDigitada = req.body.senhaDigitada;

    if (usuarioDigitado === usuario && senhaDigitada === senha) {
        logado = true;
        res.send('Login realizado com sucesso');
    } else {
        res.status(401).send('<h2>Usuário ou senha errados</h2>');
        logado = false;
    }
});

app.get('/home', (req, res) => {
    if (!logado) {
        return res.status(403).send('<h2>Faça login primeiro!</h2>');
    }

    res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});