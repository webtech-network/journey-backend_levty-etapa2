const ocorrenciasRepository = require('../repositories/ocorrenciasRepository');

class ApiError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
    }
}

const getOcorrencias = (req, res, next) => {
    try {
        const ocorrencias = ocorrenciasRepository.findAll();
        res.status(200).json(ocorrencias);
    } catch (error) {
        next(new ApiError('Failed to retrieve occurrences.', 500));
    }
};

const createOcorrencia = (req, res, next) => {
    const { titulo, descricao, status } = req.body;

    if (!titulo) {
        return next(new ApiError("Campo 'titulo' é obrigatório.", 400));
    }
    if (!descricao) {
        return next(new ApiError("Campo 'descricao' é obrigatório.", 400));
    }
    if (!['pendente', 'resolvido'].includes(status)) {
        return next(new ApiError("Campo 'status' deve ser 'pendente' ou 'resolvido'.", 400));
    }

    try {
        const novaOcorrencia = ocorrenciasRepository.create({ titulo, descricao, status });
        res.status(201).json(novaOcorrencia);
    } catch (error) {
        next(new ApiError('Failed to create occurrence.', 500));
    }
};

const updateOcorrencia = (req, res, next) => {
    const { id } = req.params;
    const { titulo, descricao, status } = req.body;

    if (!titulo) {
        return next(new ApiError("Campo 'titulo' é obrigatório.", 400));
    }
    if (!descricao) {
        return next(new ApiError("Campo 'descricao' é obrigatório.", 400));
    }
    if (!['pendente', 'resolvido'].includes(status)) {
        return next(new ApiError("Campo 'status' deve ser 'pendente' ou 'resolvido'.", 400));
    }

    try {
        const ocorrenciaAtualizada = ocorrenciasRepository.update(id, { titulo, descricao, status });

        if (!ocorrenciaAtualizada) {
            return next(new ApiError("Ocorrência não encontrada.", 404));
        }

        res.status(200).json(ocorrenciaAtualizada);
    } catch (error) {
        next(new ApiError('Failed to update occurrence.', 500));
    }
};

const deleteOcorrencia = (req, res, next) => {
    const { id } = req.params;

    try {
        const deleted = ocorrenciasRepository.remove(id);

        if (!deleted) {
            return next(new ApiError("Ocorrência não encontrada.", 404));
        }

        res.status(204).send();
    } catch (error) {
        next(new ApiError('Failed to delete occurrence.', 500));
    }
};

module.exports = {
    getOcorrencias,
    createOcorrencia,
    updateOcorrencia,
    deleteOcorrencia,
};