var express = require('express');
var procedures = require('../procedures/GreenTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.procGetTrips_Green_Current().then(function(data){
            res.send(data);
            console.log(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })

router.route('/published')
    .get(function(req, res) {
        procedures.procGetPublishedTrips_Green_Current().then(function(data){
            res.send(data);
            console.log(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })



// = /api/GreenTrips/:id
router.route('/:id')
    .get(function(req, res) {
    procedures.procGetTrip(req.params.id).then(function(greenTrip) {
            res.send(greenTrip);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })

module.exports = router;