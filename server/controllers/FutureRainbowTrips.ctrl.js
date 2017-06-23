var express = require('express');
var procedures = require('../procedures/RainbowTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.procGetTrips_Rainbow_Future().then(function(data){
            res.send(data);
            console.log(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

// = /api/CurrentRainbowTrips/:id
router.route('/:id')
    .get(function(req, res) {
    procedures.procGetTrip(req.params.id).then(function(rainbowTrip) {
            res.send(rainbowTrip);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })



module.exports = router;