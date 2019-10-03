'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('father', { name: 'Firoz khan', comment: 'Firoz khan is my hero' });
});

module.exports = router;