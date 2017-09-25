var mongoose = require('mongoose');

//Users
var userSchema = new mongoose.Schema({
  name: String,
  steam_id: String
});

var userModel = mongoose.model('User', userSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
// var userModel = userModel.find({ 'name': 'McSnaggit' }, 'name', function (err, users) {
//   if (err) return handleError(err);
//   // 'athletes' contains the list of athletes that match the criteria.
// })

module.exports = userModel;
