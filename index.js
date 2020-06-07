require('express-async-errors');
const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

require('./startup/routes')(app)
require('./startup/db')();
require('./startup/prod')(app);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 