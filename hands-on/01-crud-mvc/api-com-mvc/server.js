require('dotenv').config();
const express = require('express');
const ocorrenciasRoutes = require('./routes/ocorrenciasRoutes');
const errorHandler = require('./utils/errorHandler');
const setupSwagger = require('./docs/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/ocorrencias', ocorrenciasRoutes);

app.use(errorHandler);

setupSwagger(app);

app.listen(PORT, () => {
    console.log(`Servidor de Ocorrências da Companhia de Energia rodando em http://localhost:${PORT}`);
});