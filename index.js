require('express-async-errors');
const express = require('express');
var cors = require('cors');
const app = express();


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

require('./startup/routes')(app)
require('./startup/db')();
require('./startup/prod')(app);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 