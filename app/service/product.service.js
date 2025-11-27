const productModel = require('../models/product.model');
const ApiError = require('../utils/apiError.utils');
const { StatusCodes } = require('http-status-codes');
class ProductService {
	constructor(productModel) {
		this.productModel = productModel;
	}

	/**
	 * @param {Object} product
	 * @description creates a new product
	 * @throws {ApiError} if product creation fails
	 * @returns {Object} newly created product
	 */
	async create(product) {
		const newProduct = await this.productModel.create(product);
		if (!newProduct) {
			throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Product creation failed');
		}
		return newProduct;
	}
}

module.exports = new ProductService(productModel);
