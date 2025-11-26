const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('../utils/asyncHandler.utils');
const ApiResponse = require('../utils/apiResponse.utils');

class ProductController {
	createProductHandler = asyncHandler(async (req, res) => {
		console.log(
			`[AuthController] create product request received with body: ${JSON.stringify(req.body)}`,
		);

		return res
			.status(StatusCodes.CREATED)
			.json(new ApiResponse(true, 'Product created successfully', req.body));
	});
}

module.exports = new ProductController();
