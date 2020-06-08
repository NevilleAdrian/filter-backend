const express = require('express');
const filters = require('../routes/filters');
const error = require('../middleware/error')

function routes(app)  {

app.use(express.json());
app.use('/api/filters', filters);
app.use(error);

}

module.exports = routes