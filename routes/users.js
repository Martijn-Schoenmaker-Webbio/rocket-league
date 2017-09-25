var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find({}).exec((err, users) => {
      res.send(users);
      // console.log(err);
    });
});

module.exports = router;
