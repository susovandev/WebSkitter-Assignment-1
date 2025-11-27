const express = require('express');
const productController = require('../controllers/product.controller');
const validateSchema = require('../middlewares/validation.middleware');
const productValidation = require('../validations/product.validation');
const router = express.Router();

/**
 * @route GET http://localhost:5000/api/products
 * @description Retrieve all products.
 */
router.route('/').get(productController.getProductsHandler);
/**
 * @route GET http://localhost:5000/api/products/:id
 * @description Get a product by its ID.
 */
router
	.route('/:id')
	.get(
		validateSchema(productValidation.getProductByIdSchema, 'params'),
		productController.getProductByIdHandler,
	);
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
/**
 * @route PUT http://localhost:5000/api/products/:id
 * @description Update an existing product.
 */
router
	.route('/:id')
	.put(
		validateSchema(productValidation.getProductByIdSchema, 'params'),
		validateSchema(productValidation.updateProductSchema, 'body'),
		productController.updateProductHandler,
	);
/**
 * @route DELETE http://localhost:5000/api/products/:id
 * @description Remove a product by ID.
 */
router
	.route('/:id')
	.delete(
		validateSchema(productValidation.getProductByIdSchema, 'params'),
		productController.deleteProductHandler,
	);

module.exports = router;
