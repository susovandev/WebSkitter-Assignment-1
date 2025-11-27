const express = require('express');
const productController = require('../controller/product.controller');
const validateSchema = require('../middlewares/validation.middleware');
const productValidation = require('../validation/product.validation');
const router = express.Router();

/**
 * @route GET http://localhost:5000/api/products
 * @description Retrieve all products.
 */
router.route('/').get(productController.getProductsHandler);

/**
 * @route POST http://localhost:5000/api/products
 * @description Save product to MongoDB.
 */
router
	.route('/')
	.post(
		validateSchema(productValidation.createProductSchema, 'body'),
		productController.createProductHandler,
	);

module.exports = router;
