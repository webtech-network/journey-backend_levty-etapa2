// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const ocorrenciasRoutes = require('./routes/ocorrenciasRoutes');
const errorHandler = require('./utils/errorHandler');
const setupSwagger = require('./docs/swagger'); // ajuste o caminho se estiver em outro local

/**
 * @fileoverview Main application entry point for the Express.js API.
 * This file is responsible for setting up the Express application,
 * applying global middleware, loading routes, and starting the server.
 * It acts as the orchestrator for the entire API.
 */

const app = express();
const PORT = process.env.PORT || 3000; // Use port from .env or default to 3000

// Middleware to parse JSON request bodies
app.use(express.json());

// Main API routes
// All routes defined in ocorrenciasRoutes will be prefixed with '/ocorrencias'
app.use('/ocorrencias', ocorrenciasRoutes);

// Global error handling middleware
// This must be the last middleware added to the Express app
app.use(errorHandler);

setupSwagger(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Servidor de Ocorrências da Companhia de Energia rodando em http://localhost:${PORT}`);
});