const express = require('express');
const constants = require('./constant');

const productRoutes = require('./routes/product.routes');

// Initialize express app
const app = express();

// Body parser middleware
app.use(express.json({ limit: constants.BODY_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: constants.BODY_LIMIT }));

// Routes
app.use('/api/products', productRoutes);

// Export app
module.exports = app;
