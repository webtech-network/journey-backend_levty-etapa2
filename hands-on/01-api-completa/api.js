const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];
let nextId = 1;

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        res.status(404).json({
            message: 'Usuário não encontrado.'
        });
    }

    res.status(200).json(user);
});

app.post('/users', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        res.status(400).json({
            message: 'Nome é obrigatório.'
        });
    }

    const newUser = {
        id: nextId++,
        nome
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        res.status(404).json({
            message: 'Usuário não encontrado.'
        });
    }

    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        res.status(400).json({
            message: 'Nome é obrigatório.'
        });
    }

    const { nome } = req.body;

    if (!nome) {
        res.status(400).json({
            message: 'Nome é obrigatório.'
        });
    }

    users[userIndex].nome = nome;
    res.status(200).json(users[userIndex]);
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        res.status(404).json({
            message: 'Usuário não encontrado.'
        });
    }

    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json({
        message: 'Usuário deletado com sucesso.',
        deletedUser
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});