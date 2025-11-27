const { StatusCodes } = require('http-status-codes');
const mongoose = require('mongoose');
const config = require('../config/config');

const globalErrorHandler = (err, req, res, next) => {
	if (config.NODE_ENV === 'development') {
		console.warn(`Global Error Handler called`, err);
	}

	// Mongoose validation error
	if (err instanceof mongoose.Error.ValidationError) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: err.message,
			...(config.NODE_ENV === 'development' && { stack: err.stack }),
		});
	}

	return res.status(err.statusCode || 500).json({
		statusCode: err.statusCode || 500,
		success: false,
		message: err.message,
		...(config.NODE_ENV === 'development' && { stack: err.stack }),
	});
};

module.exports = globalErrorHandler;
