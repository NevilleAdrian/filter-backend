const express = require('express');
const filters = require('../routes/filters');
var cors = require('cors')
const error = require('../middleware/error')

function routes(app)  {

app.use(express.json());
app.use(cors());

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

app.use('/api/filters', filters);
app.use(error);

}

module.exports = routes