const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3000;

app.use(express.json());

const ocorrencias = [];

app.get('/ocorrencias', (req, res) => {
    res.status(200).json(ocorrencias);
});

app.post('/ocorrencias', (req, res) => {
    const { titulo, descricao, status } = req.body;

    if (!titulo) {
        return res.status(400).json({
            status: 400,
            message: "Campo 'titulo' é obrigatório."
        });
    }

    if (!descricao) {
        return res.status(400).json({
            status: 400,
            message: "Campo 'descricao' é obrigatório."
        });
    }

    if (!['pendente', 'resolvido'].includes(status)) {
        return res.status(400).json({
            status: 400,
            message: "Campo 'status' deve ser 'pendente' ou 'resolvido'."
        });
    }

    const novaOcorrencia = {
        id: uuidv4(),
        titulo,
        descricao,
        status
    };

    ocorrencias.push(novaOcorrencia);
    res.status(201).json(novaOcorrencia);
});

app.put('/ocorrencias/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, status } = req.body;

    const ocorrencia = ocorrencias.find(o => o.id === id);

    if (!ocorrencia) {
        return res.status(404).json({ message: "Ocorrência não encontrada." });
    }

    if (!titulo) {
        return res.status(400).json({
            status: 400,
            message: "Campo 'titulo' é obrigatório."
        });
    }

    if (!descricao) {
        return res.status(400).json({
            status: 400,
            message: "Campo 'descricao' é obrigatório."
        });
    }

    if (!['pendente', 'resolvido'].includes(status)) {
        return res.status(400).json({
            status: 400,
            message: "Campo 'status' deve ser 'pendente' ou 'resolvido'."
        });
    }

    ocorrencia.titulo = titulo;
    ocorrencia.descricao = descricao;
    ocorrencia.status = status;

    res.status(200).json(ocorrencia);
});

app.delete('/ocorrencias/:id', (req, res) => {
    const { id } = req.params;
    const index = ocorrencias.findIndex(o => o.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Ocorrência não encontrada." });
    }

    ocorrencias.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor de Ocorrências da Companhia de Energia rodando em http://localhost:${PORT}`);
});