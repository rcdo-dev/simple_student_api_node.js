import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Students API',
            version: '1.0.0',
            description: 'API Documentation'
        },
    },
    apis: ['./routes/StudentRoute.js']
};

export const swaggerSpec = swaggerJsdoc(options);
export {swaggerUi};