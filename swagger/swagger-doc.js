const swaggerJSDocs = require ('swagger-jsdoc');
const swaggerUi = require ('swagger-ui-express');
const  userRouteDocs  = require ('./userDoc');
const  blogRouteDocs  = require ('./postDoc');
const  contactRouteDocs  = require ('./messageDoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'APIs Documentation',
      description: ' mybrand-api.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
      {
        url: 'https://mybrand-api.com',
        description: 'Production server',
      },
    ],
    tags: [
      { name: 'User', description: 'Operations about user' },
      { name: 'Contact', description: 'Contact Routes' },
      { name: 'Blog', description: 'Blog Routes' },
    ],
    components: {
      securitySchemes: {
        token: {
          type: 'apiKey',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name:"token",
          in:"header"
        },
      },
    },
    paths: { ...userRouteDocs, ...contactRouteDocs, ...blogRouteDocs },
  },
  apis: ['../routes/**/*.js'],
};

const swaggerSpec = swaggerJSDocs(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

module.exports = swaggerDocs;















// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUi = require("swagger-ui-express");
// const userRouteDocs  = require('./userDoc');
// const postRouteDoc = require('./postDoc');

// const options = {
//     swaggerDefinition: {
//         openapi: '3.0.0',
//         info:{
//             title: 'Documentation of APIs',
//             version: '1.0.0',
//             description: 'this is APIs Documentation'
//         },
//         components:{
//             securitySchemes:{
//                 bearerAuth:{
//                     type:'http',
//                     scheme:'bearer',
//                     in:'header',
//                     bearerformat:'JWT'
//                 }
//             }
//         },
//         paths:{
//             ...postRouteDoc
//         }
//         security: [{
//             bearerAuth: []
//         }],
//         servers: [{url: 'http://localhost:3000'},{url: "http://crudoperation-backend"}]
//     },
//     apis: ['../routes/**/*.js'],
// }


// const specs = swaggerJsDoc(options)

// const swaggerDocs = (app) => {
//     app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//   };
//   module.exports = swaggerDocs;