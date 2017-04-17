var express = require('express');
var procedures = require('../procedures/OrangeTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.procGetTrips_Orange().then(function(data){
            res.send(data);
            console.log(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

// = /api/OrangeTrips/:id
router.route('/:id')
    .get(function(req, res) {
    procedures.procGetTrip_Orange(req.params.id).then(function(orangeTrip) {
            res.send(orangeTrip);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })

module.exports = router;