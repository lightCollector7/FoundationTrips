var express = require('express');
var procedures = require('../procedures/YellowTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.procGetTrips_Yellow_Current().then(function(data){
            res.send(data);
            console.log(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

// = /api/YellowTrips/:id
router.route('/:id')
    .get(function(req, res) {
    procedures.procGetTrip(req.params.id).then(function(yellowTrip) {
            res.send(yellowTrip);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })

module.exports = router;