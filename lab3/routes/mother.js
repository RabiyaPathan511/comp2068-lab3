'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('mother', { name: 'Shafiya', comment: 'Shafiya is very kind in nature' });
});

module.exports = router;