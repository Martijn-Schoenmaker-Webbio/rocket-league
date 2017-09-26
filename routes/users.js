var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res) {
    User.find({}).select('name steam_id').exec((err, users) => {
      res.render('users', { title: ' - Players & Teams', users });
    });
});

module.exports = router;
