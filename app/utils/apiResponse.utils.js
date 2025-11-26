class ApiResponse {
	constructor(status = true, message = 'OK', data = []) {
		this.status = status;
		this.message = message;
		this.data = data;
	}
}

module.exports = ApiResponse;
