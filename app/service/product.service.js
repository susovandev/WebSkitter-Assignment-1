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
	 * @description Get a product by its ID.
	 * @throws {ApiError} if product is not found.
	 * @returns {Object} product object.
	 */
	async getById(productId) {
		const product = await this.productModel.findById({ _id: productId });
		if (!product) {
			throw new ApiError(StatusCodes.NOT_FOUND, 'Products not found');
		}

		return product;
	}
	/**
	 * @param {Object} productData
	 * @description Save product to MongoDB.
	 * @throws {ApiError} if product creation fails.
	 * @returns {Object} newly created product Object.
	 */
	async create(productData) {
		const newProduct = await this.productModel.create(productData);
		if (!newProduct) {
			throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Product creation failed');
		}
		return newProduct;
	}
	/**
	 * @param {String} productId
	 * @param {Object} productData
	 * @description Update an existing product.
	 * @throws {ApiError} if product not found.
	 * @returns {Object} updated product 	Object.
	 */
	async update(productId, productData) {
		const product = await this.productModel.findByIdAndUpdate({ _id: productId }, productData, {
			new: true,
		});
		if (!product) {
			throw new ApiError(StatusCodes.NOT_FOUND, 'Product not found');
		}
		return product;
	}
	/**
	 * @param {String} productId
	 * @description Remove a product by ID.
	 * @throws {ApiError} if product not found.
	 * @returns {Object} deleted product Object.
	 */
	async delete(productId) {
		const product = await this.productModel.findByIdAndDelete({ _id: productId });
		if (!product) {
			throw new ApiError(StatusCodes.NOT_FOUND, 'Product not found');
		}
		return product;
	}
}

module.exports = new ProductService(productModel);
