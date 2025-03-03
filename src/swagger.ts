import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v1.0.0',
    title: 'Swagger Demo Project',
    description: 'Implementation of Swagger with TypeScript',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: '',
    },
  ],
  components: {
    securitySchemes: {
      sessionAuth: {
        type: 'http',
        scheme: 'session',
      },
    },
  },
};

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './src/routes/auth.route.ts',
  './src/routes/file.route.ts',
];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
