﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { name: 'Rabiya', comment: 'I love to do programming' });
});

module.exports = router;