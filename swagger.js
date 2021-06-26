'use strict';
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './doc/swagger-output.json';
const endpointsFiles = ['./index.js'];

const doc = {
  info: {
    title: 'Swagger Test',
    description: '',
  },
  host: 'localhost:3005',
  schemes: ['http'],
  consumes: ['multipart/form-data', 'application/json'],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js');
});
