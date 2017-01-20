var express = require('express');
var procedures = require('../procedures/users.proc');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.procGetUsers().then(function(data){
            res.send(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

module.exports = router;
