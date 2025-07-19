const express = require('express');
const router = express.Router();
const ocorrenciasController = require('../controllers/ocorrenciasController');

/**
 * @swagger
 * tags:
 *   name: Ocorrências
 *   description: Gerenciamento de ocorrências
 */

/**
 * @swagger
 * /ocorrencias:
 *   get:
 *     summary: Lista todas as ocorrências
 *     tags: [Ocorrências]
 *     responses:
 *       200:
 *         description: Lista de ocorrências
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', ocorrenciasController.getOcorrencias);

/**
 * @swagger
 * /ocorrencias:
 *   post:
 *     summary: Cria uma nova ocorrência
 *     tags: [Ocorrências]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *               - status
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pendente, resolvido]
 *     responses:
 *       201:
 *         description: Ocorrência criada com sucesso
 */
router.post('/', ocorrenciasController.createOcorrencia);

/**
 * @swagger
 * /ocorrencias/{id}:
 *   put:
 *     summary: Atualiza uma ocorrência existente
 *     tags: [Ocorrências]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da ocorrência
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *               - status
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pendente, resolvido]
 *     responses:
 *       200:
 *         description: Ocorrência atualizada com sucesso
 */
router.put('/:id', ocorrenciasController.updateOcorrencia);

/**
 * @swagger
 * /ocorrencias/{id}:
 *   delete:
 *     summary: Remove uma ocorrência pelo ID
 *     tags: [Ocorrências]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da ocorrência
 *     responses:
 *       204:
 *         description: Ocorrência deletada com sucesso
 */
router.delete('/:id', ocorrenciasController.deleteOcorrencia);

module.exports = router;