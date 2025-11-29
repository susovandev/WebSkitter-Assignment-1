const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('../utils/asyncHandler.utils');
const ApiResponse = require('../utils/apiResponse.utils');
const productService = require('../services/product.service');

class ProductController {
	getProductsHandler = asyncHandler(async (req, res) => {
		console.log(`[AuthController] Fetch all products request received`);
		// Delegate core logic to service layer
		const products = await productService.getAll();

		return res
			.status(StatusCodes.OK)
			.json(new ApiResponse(true, 'Products retrieved successfully', products));
	});
	getProductByIdHandler = asyncHandler(async (req, res) => {
		console.log(`[AuthController] Fetch product by id request received with id: ${req.params.id}`);
		// Delegate core logic to service layer
		const product = await productService.getById(req.params.id);

		return res
			.status(StatusCodes.OK)
			.json(new ApiResponse(true, 'Product retrieved successfully', product));
	});
	createProductHandler = asyncHandler(async (req, res) => {
		console.log(
			`[AuthController] create product request received with body: ${JSON.stringify(req.body)}`,
		);
		// Delegate core logic to service layer
		const newProduct = await productService.create(req.body);

		return res
			.status(StatusCodes.CREATED)
			.json(new ApiResponse(true, 'Product created successfully', newProduct));
	});
	updateProductHandler = asyncHandler(async (req, res) => {
		console.log(
			`[AuthController] update product request received with body: ${JSON.stringify(req.body)} and id: ${req.params.id}`,
		);
		// Delegate core logic to service layer
		const updatedProduct = await productService.update(req.params.id, req.body);

		return res
			.status(StatusCodes.OK)
			.json(new ApiResponse(true, 'Product updated successfully', updatedProduct));
	});
	deleteProductHandler = asyncHandler(async (req, res) => {
		console.log(`[AuthController] delete product request received with id: ${req.params.id}`);
		// Delegate core logic to service layer
		await productService.delete(req.params.id);

		return res
			.status(StatusCodes.OK)
			.json(new ApiResponse(true, 'Product deleted successfully', null));
	});
}

module.exports = new ProductController();
