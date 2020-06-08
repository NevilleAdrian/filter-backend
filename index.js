require('express-async-errors');
const express = require('express');
const app = express();

// configure our app to handle CORS requests
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"x-access-token,X-Requested-With,Content-Type,Authorization,cache-control"
	);
	res.setHeader("X-Powered-By", "MadtServerInjunctions!");
	next();
});

require('./startup/routes')(app)
require('./startup/db')();
require('./startup/prod')(app);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 