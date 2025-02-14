const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const dbFile = './db/db.json';

// Cadastro de Usuário
app.post('/api/cadastro', (req, res) => {
    const { nome, email, senha, tipo } = req.body;
    let usuarios = JSON.parse(fs.readFileSync(dbFile));
    usuarios.push({ nome, email, senha, tipo });
    fs.writeFileSync(dbFile, JSON.stringify(usuarios));
    res.redirect('/login.html');
});

// Login de Usuário
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;
    let usuarios = JSON.parse(fs.readFileSync(dbFile));
    const user = usuarios.find(u => u.email === email && u.senha === senha);
    if (user) {
        res.redirect('/vagas.html');
    } else {
        res.send('Credenciais inválidas!');
    }
});

// CRUD de Vagas
app.get('/api/vagas', (req, res) => {
    let vagas = JSON.parse(fs.readFileSync(dbFile));
    res.json(vagas);
});

app.post('/api/vagas', (req, res) => {
    const { titulo, descricao } = req.body;
    let vagas = JSON.parse(fs.readFileSync(dbFile));
    vagas.push({ titulo, descricao });
    fs.writeFileSync(dbFile, JSON.stringify(vagas));
    res.send('Vaga cadastrada!');
});

// Iniciar o Servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

