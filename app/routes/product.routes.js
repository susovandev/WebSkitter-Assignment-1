const express = require('express');
const productController = require('../controller/product.controller');
const validateSchema = require('../middlewares/validation.middleware');
const productValidation = require('../validation/product.validation');
const router = express.Router();

/**
 * @route POST http://localhost:5000/api/products
 * @description Create a new product
 */
router
	.route('/')
	.post(
		validateSchema(productValidation.createProductSchema, 'body'),
		productController.createProductHandler,
	);

module.exports = router;
