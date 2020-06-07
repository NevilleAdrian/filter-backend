require('express-async-errors');
const express = require('express');
var cors = require('cors');
const app = express();

var whitelist = "https://filtered-neville.herokuapp.com/"
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(cors(corsOptions));

require('./startup/routes')(app)
require('./startup/db')();
require('./startup/prod')(app);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 