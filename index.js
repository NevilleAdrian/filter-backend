require('express-async-errors');
const express = require('express');
const app = express();
require('./startup/routes')(app)
require('./startup/db')();
require('./startup/prod')(app);

// if (process.env.NODE_ENV === 'Production') {
    
// }

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 