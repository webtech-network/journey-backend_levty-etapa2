// docs/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/**
 * @fileoverview Configuration for Swagger/OpenAPI documentation.
 * This file sets up the options for generating API documentation
 * using JSDoc comments in your route and controller files.
 * It also configures the Swagger UI to serve the documentation.
 */

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
                url: `http://localhost:${process.env.PORT || 3000}`,
                description: 'Local development server',
            },
        ],
    },
    // Paths to files containing OpenAPI definitions (e.g., JSDoc comments)
    apis: ['./routes/*.js', './controllers/*.js'], // Adjust paths as necessary
};

const swaggerSpec = swaggerJsdoc(options);

/**
 * Sets up Swagger UI middleware for an Express app.
 * @param {Object} app - The Express application instance.
 */
const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger UI available at http://localhost:${process.env.PORT || 3000}/api-docs`);
};

module.exports = setupSwagger;

// You will need to install swagger-jsdoc and swagger-ui-express:
// npm install swagger-jsdoc swagger-ui-express dotenv