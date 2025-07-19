// routes/ocorrenciasRoutes.js
const express = require('express');
const router = express.Router();
const ocorrenciasController = require('../controllers/ocorrenciasController');

/**
 * @fileoverview Defines the API routes for 'ocorrencias'.
 * This layer is responsible for mapping specific URL paths and HTTP methods
 * to the corresponding controller functions. It should be kept lean,
 * focusing solely on routing.
 */

// GET all occurrences
router.get('/', ocorrenciasController.getOcorrencias);

// POST a new occurrence
router.post('/', ocorrenciasController.createOcorrencia);

// PUT (update) an existing occurrence by ID
router.put('/:id', ocorrenciasController.updateOcorrencia);

// DELETE an occurrence by ID
router.delete('/:id', ocorrenciasController.deleteOcorrencia);

module.exports = router;