const express = require('express');
const app = express();
app.use(express.json());

app.get('/home', (req, res) => res.send('<h1>Home</h1>'));
app.post('/login', (req, res) => res.json({usuario: req.body.usuario, senhas: req.body.senha}));
app.post('/idade', (req, res) => {
    const ano = req.body.ano;
    const idade = 2026 - ano;
    res.send({idade: idade}) 
})

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});