const productModel = require('../models/product.model');
const ApiError = require('../utils/apiError.utils');
const { StatusCodes } = require('http-status-codes');
class ProductService {
	constructor(productModel) {
		this.productModel = productModel;
	}

	/**
	 * @description Retrieve all products.
	 * @throws {ApiError} if products is undefined.
	 * @returns {Array} list of products.
	 */
	async getAll() {
		const productList = await this.productModel.find({}).sort({ createdAt: -1 }); // sort by createdAt in descending order
		if (!productList) {
			throw new ApiError(StatusCodes.NOT_FOUND, 'Products not found');
		}

		return productList;
	}

	/**
	 * @param {Object} product
	 * @description Save product to MongoDB.
	 * @throws {ApiError} if product creation fails.
	 * @returns {Object} newly created product.
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
