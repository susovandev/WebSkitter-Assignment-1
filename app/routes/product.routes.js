const express = require('express');
const productController = require('../controller/product.controller');
const validateSchema = require('../middlewares/validation.middleware');
const productValidation = require('../validation/product.validation');
const router = express.Router();

router
	.route('/')
	.post(
		validateSchema(productValidation.createProductSchema, 'body'),
		productController.createProductHandler,
	);

module.exports = router;
