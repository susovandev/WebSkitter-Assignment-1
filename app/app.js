const express = require('express');
const constants = require('./constants');

const productRoutes = require('./routes/product.routes');
const routeNotFoundHandler = require('./middlewares/404.middleware');
const globalErrorHandler = require('./middlewares/errorHandler.middleware');

// Initialize express app
const app = express();

// Body parser middleware
app.use(express.json({ limit: constants.BODY_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: constants.BODY_LIMIT }));

// Routes
app.use('/api/products', productRoutes);

// 404 handler
app.use(routeNotFoundHandler);

// Error handler
app.use(globalErrorHandler);

// Export app
module.exports = app;
