const mongoose = require('mongoose');
const config = require('config')



function db() {
    const db = config.get('db');
    const MONGODB_URL = `mongodb+srv://neville:<osasere1994$>@vidly-loeg5.mongodb.net/${db}?retryWrites=true&w=majority`
    mongoose.connect( process.env.MONGODB_URL,  { useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log(`Connected to ${db}`))
    .catch(err => console.error('Could not connect to MongoDB...'));
  
  
}

module.exports = db;