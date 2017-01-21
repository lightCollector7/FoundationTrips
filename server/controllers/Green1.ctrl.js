var express = require('express');
var procedures = require('../procedures/Green1.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.procGetGreen1().then(function(data){
            res.send(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

module.exports = router;