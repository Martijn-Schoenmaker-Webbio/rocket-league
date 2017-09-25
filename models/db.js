// var mongoose = require('mongoose');
//
// var connectdb = mongoose.connect('mongodb://127.0.0.1:27017/rl', { useMongoClient: true });
//
// module.exports = connectdb;


// Bring Mongoose into the app
const mongoose = require('mongoose');
// const databaseConfig = require('../config/database');

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.error('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.warn('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// Create the database connection
module.exports = (req, res, next) => {
  mongoose.connect('mongodb://127.0.0.1:27017/rl', {
    useMongoClient: true,
  });
  next();
};
