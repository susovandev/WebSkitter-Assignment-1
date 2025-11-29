const express = require('express');
const constants = require('./constants');

const productRoutes = require('./routes/product.routes');
const routeNotFoundHandler = require('./middlewares/404.middleware');
const globalErrorHandler = require('./middlewares/errorHandler.middleware');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('node:path');
// Load YAML file
const swaggerDocument = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));

// Initialize express app
const app = express();

// Body parser middleware
app.use(express.json({ limit: constants.BODY_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: constants.BODY_LIMIT }));

// Routes
app.use('/api/products', productRoutes);

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 404 handler
app.use(routeNotFoundHandler);

// Error handler
app.use(globalErrorHandler);

// Export app
module.exports = app;
