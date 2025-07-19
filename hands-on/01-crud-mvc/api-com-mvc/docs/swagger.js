const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ocorrências API',
            version: '1.0.0',
            description: 'API para gerenciamento de ocorrências da Companhia de Energia, seguindo a arquitetura MVC.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de desenvolvimento local',
            },
        ],
    },
    apis: ['./routes/*.js'], // Caminhos dos arquivos com anotações Swagger
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
