const dotenv = require('dotenv').config({ path: './.env' });

const config = {
	PORT: Number(process.env.PORT) ?? 5000,
	NODE_ENV: process.env.NODE_ENV || 'development',
	DATABASE: {
		URI: process.env.DATABASE_URI,
		DB_NAME: process.env.DATABASE_NAME,
	},
};

module.exports = Object.freeze(config);
