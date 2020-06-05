const mongoose = require('mongoose');
const config = require('config')

const MONGODB_URL = "mongodb+srv://Neville:osasere1994$@myapp-pzr1c.azure.mongodb.net/<dbname>?retryWrites=true&w=majority"

function db() {
    const db = config.get('db');
    mongoose.connect( db,  { useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log(`Connected to ${db}`))
    .catch(err => console.error('Could not connect to MongoDB...'));
  
  
}

module.exports = db;