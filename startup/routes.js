const express = require('express');
const filters = require('../routes/filters');
const error = require('../middleware/error')
app.use(cors());

function routes(app)  {

app.use(express.json());

app.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
})
     
app.use('/api/filters', filters);
app.use(error);

}

module.exports = routes