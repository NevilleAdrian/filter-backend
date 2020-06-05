require('express-async-errors');
const express = require('express');
const app = express();
require('./startup/routes')(app)
require('./startup/db')();
require('./startup/prod')(app);

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 