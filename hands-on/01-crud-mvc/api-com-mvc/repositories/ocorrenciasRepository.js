const { v4: uuidv4 } = require('uuid');

const ocorrencias = [];

const findAll = () => {
    return ocorrencias;
};

const findById = (id) => {
    return ocorrencias.find(o => o.id === id);
};

const create = (data) => {
    const novaOcorrencia = {
        id: uuidv4(),
        titulo: data.titulo,
        descricao: data.descricao,
        status: data.status
    };

    ocorrencias.push(novaOcorrencia);
    return novaOcorrencia;
};

const update = (id, newData) => {
    const ocorrencia = ocorrencias.find(o => o.id === id);
    if (ocorrencia) {
        ocorrencia.titulo = newData.titulo;
        ocorrencia.descricao = newData.descricao;
        ocorrencia.status = newData.status;
    }

    return ocorrencia;
};

const remove = (id) => {
    const index = ocorrencias.findIndex(o => o.id === id);
    if (index !== -1) {
        ocorrencias.splice(index, 1);
        return true;
    }

    return false;
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};