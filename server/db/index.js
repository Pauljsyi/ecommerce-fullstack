const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI')

// console.log(db)


mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})


const connect = mongoose.connection;

  connect.on('error', console.error.bind(console, "connection error"));
  connect.once('open', function () {console.log('mongo connected')});



module.exports = connect