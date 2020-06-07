const express = require('express');
var cors = require('cors');
const filters = require('../routes/filters');
const error = require('../middleware/error')

function routes(app)  {

app.use(express.json());


app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "https://filtered-neville.herokuapp.com/");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       next();
});
     

app.use('/api/filters', filters);
app.use(error);

}

module.exports = routes