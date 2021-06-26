'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./doc/swagger-output.json');

const server = express();

// server port
const port = 3005;

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

/* Routes */
const router = require('./route');

/* Middlewares */
server.use(router);

server.get('/', (req, res, next) => {
  res.send('Swagger Test');
});

server.all('*', (req, res, next) => {
  console.log('Request not found');
  res.status(404).send('Page Not Found');
});

server.listen(port, () => {
  console.log(`Server is running!\n
  API documentation: http://localhost:${port}/doc`);
});
