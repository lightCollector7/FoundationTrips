var express = require('express');
var procedures = require('../procedures/GreenTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.procGetTrips_Green().then(function(data){
            res.send(data);
            console.log(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

// = /api/GreenTrips/:id
router.route('/:id')
    .get(function(req, res) {
    procedures.procGetTrip_Green(req.params.id).then(function(greenTrip) {
            res.send(greenTrip);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
// router.route('/:id/slots')           // OR '/slots/:id'         ???
//     .get(function (req, res) {
//         procedures.procGetTripSlots_Green(req.params.id).then(function(greenTripSlots){
//             res.send(greenTripSlots);
//             console.log(post);
//         }, function(err) {
//             console.log(err);
//             res.sendStatus(500);
        
//         });
//     });

module.exports = router;