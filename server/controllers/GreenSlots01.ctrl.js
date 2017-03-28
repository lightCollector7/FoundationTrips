var express = require('express');
var procedures = require('../procedures/GreenSlots01.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.procGetGreenSlots01().then(function(data){
            res.send(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
       .post(function (req, res) {
        var p = req.body;
        procedures.procInsertMEintoGreenSlots01(p.firstName, p.lastName, p.waitlist, p.paid, p.colorID, p.userID)
            .then(function (id) {
                res.status(201).send(id);
            }, function (err) {
                console.log(err);
                res.sendStatus(500);
            });
    });

module.exports = router;