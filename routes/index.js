var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({}).select('name steam_id').exec((err, users) => {
    res.render('index', { title: ' - Schedule', users });
  });
});

module.exports = router;
