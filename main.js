const app = require('./app/app');
const config = require('./app/config/config');
const connectDB = require('./app/db/db');

// Connect to database and start server
connectDB()
	.then(() => {
		app.listen(config.PORT, () => {
			console.log(`Server running in ${config.NODE_ENV} mode on http://localhost:${config.PORT}`);
		});
	})
	.catch((error) => {
		// Exit with failure
		console.error(`Error connecting to database: ${error.message}`);
		process.exit(1);
	});
