var mongoose = require('mongoose');

//Users
var userSchema = new mongoose.Schema({
  name: String,
  steam_id: String
});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;
