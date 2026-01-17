const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title:'Users Api',
        description: 'Users Api'
    },
    host: 'https://project-1-tdhp.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
