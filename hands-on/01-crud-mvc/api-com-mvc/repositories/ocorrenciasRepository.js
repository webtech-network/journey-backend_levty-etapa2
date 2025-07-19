// repositories/ocorrenciasRepository.js
const { v4: uuidv4 } = require('uuid');

/**
 * @fileoverview Manages data access for 'ocorrencias' (occurrences).
 * This layer is responsible for interacting with the data source.
 * In this example, it uses an in-memory array, but in a real application,
 * it would connect to a database (e.g., MongoDB, PostgreSQL).
 */

// In-memory array to simulate a database.
// In a real application, this would be replaced by database queries.
const ocorrencias = [];

/**
 * Finds all occurrences.
 * @returns {Array} An array of all occurrences.
 */
const findAll = () => {
    return ocorrencias;
};

/**
 * Finds an occurrence by its ID.
 * @param {string} id - The ID of the occurrence.
 * @returns {Object|undefined} The occurrence object if found, otherwise undefined.
 */
const findById = (id) => {
    return ocorrencias.find(o => o.id === id);
};

/**
 * Creates a new occurrence.
 * @param {Object} data - The data for the new occurrence (titulo, descricao, status).
 * @returns {Object} The newly created occurrence object, including its generated ID.
 */
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

/**
 * Updates an existing occurrence.
 * @param {string} id - The ID of the occurrence to update.
 * @param {Object} newData - The new data for the occurrence (titulo, descricao, status).
 * @returns {Object|undefined} The updated occurrence object if found, otherwise undefined.
 */
const update = (id, newData) => {
    const ocorrencia = ocorrencias.find(o => o.id === id);
    if (ocorrencia) {
        ocorrencia.titulo = newData.titulo;
        ocorrencia.descricao = newData.descricao;
        ocorrencia.status = newData.status;
    }
    return ocorrencia;
};

/**
 * Deletes an occurrence by its ID.
 * @param {string} id - The ID of the occurrence to delete.
 * @returns {boolean} True if the occurrence was deleted, false otherwise.
 */
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