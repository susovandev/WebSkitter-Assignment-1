const mongoose = require('mongoose');
const config = require('../config/config');

const connectDB = async () => {
	try {
		// Connect to database
		const connectionInstance = await mongoose.connect(
			`${config.DATABASE.URI}/${config.DATABASE.DB_NAME}`,
		);
		console.log(
			`Database connected: ${connectionInstance.connection.host}\nDatabase name: ${connectionInstance.connection.name}`,
		);
	} catch (error) {
		console.error(`Error connecting to database: ${error.message}`);
		throw error;
	}
};

module.exports = connectDB;
