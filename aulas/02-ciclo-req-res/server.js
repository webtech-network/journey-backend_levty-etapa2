const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/site', express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

const validaNome = (req, res, next) => {
    const nome = req.query.nome;

    if (!nome) {
        res.status(400).send('O parâmetro "nome" é obrigatório.');
    }

    next();
};

app.get('/hello', validaNome, (req, res) => {
    const nome = req.query.nome;
    res.send(`Olá, ${nome}!`);
});

app.post('/formulario', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    res.send(`Olá, ${nome} &lt;${email}&gt;!`);
});

const usuarios = [
    { id: 1, nome: 'João Castro', email: 'joaocastro@hotmail.com' },
    { id: 2, nome: 'Maria Silva', email: 'mariasilva@gmail.com' },
    { id: 3, nome: 'Pedro Augusto', email: 'pedroa@mail.com' },
];

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find((u) => u.id === parseInt(id));

    if (!usuario) {
        return res.send(404).send('Usuário não encontrado.');
    }

    res.json(usuario);
});

app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).send('Nome e e-mail são obrigatórios.');
    }

    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
