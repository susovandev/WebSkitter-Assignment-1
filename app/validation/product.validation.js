const Joi = require('joi');
const mongoose = require('mongoose');

const productValidation = {
	createProductSchema: Joi.object({
		name: Joi.string().min(3).max(100).required(),
		description: Joi.string().min(10).max(500).required(),
		price: Joi.number().precision(2).greater(0).required(),
		category: Joi.string().required(),
		inStock: Joi.boolean().default(true).optional(),
	}),
	getProductByIdSchema: Joi.object({
		id: Joi.string()
			.required()
			.custom((value, helpers) => {
				if (!mongoose.Types.ObjectId.isValid(value)) {
					return helpers.error('any.invalid');
				}
				return value;
			}, 'ObjectId validation')
			.messages({
				'any.invalid': 'Invalid Product ID. Must be a valid MongoDB ObjectId.',
				'any.required': 'Product ID is required.',
			}),
	}),
	updateProductSchema: Joi.object({
		name: Joi.string().min(3).max(100).optional(),
		description: Joi.string().min(10).max(500).optional(),
		price: Joi.number().precision(2).greater(0).optional(),
		category: Joi.string().optional(),
		inStock: Joi.boolean().default(true).optional(),
	}),
};

module.exports = productValidation;
