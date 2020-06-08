const express = require('express');
const filters = require('../routes/filters');
const error = require('../middleware/error')

function routes(app)  {

app.use(express.json());
app.use(function(req, res, next) {
       res.header('Access-Control-Allow-Origin', '*');
       res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
       res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
     
       //intercepts OPTIONS method
       if ('OPTIONS' === req.method) {
         //respond with 200
         res.send(200);
       }
       else {
       //move on
         next();
       }
     });
     
app.use('/api/filters', filters);
app.use(error);

}

module.exports = routes