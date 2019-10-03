'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('sibling', { name: 'Vahid', comment: 'Vahid is super brother' });
});

module.exports = router;