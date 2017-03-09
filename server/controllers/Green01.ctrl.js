var express = require('express');
var procedures = require('../procedures/Green01.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.procGetGreen01().then(function(data){
            res.send(data);
            console.log(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

module.exports = router;