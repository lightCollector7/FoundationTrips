var express = require('express');
var procedures = require('../procedures/GreenTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();


// = /api/GreenTripSlots/:id
router.route('/:id')
    .get(function(req, res) {
    procedures.procGetTripSlots_Green(req.params.id).then(function(greenTripSlots) {
            res.send(greenTripSlots);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })

module.exports = router;