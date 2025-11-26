const app = require('./app/app');
const config = require('./app/config/config');

// Server Listen
app.listen(() => {
	console.log(
		`Server running in ${config.NODE_ENV} mode on http://localhost:${config.PORT}`,
	);
});
