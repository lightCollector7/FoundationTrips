var express = require('express');
var procedures = require('../procedures/AdminTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

// = /api/AdminTrips/
router.route('/')
    .post(auth.isAdmin, function(req, res){
        var trip = req.body
        procedures.procInsertTrip(trip.eventName, trip.eventDescription, trip.colorID, trip.eventDate, trip.eventTime, trip.eventCost, trip.maxSlots, trip.eventDetails, trip.publish)
        .then(function(data){
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
            alert(err);
            res.sendStatus(500);
        
        });
    });
    
// = /api/AdminTrips/:id
router.route('/:id')
    .get(function(req, res) {
    procedures.procGetTrip(req.params.id).then(function(greenTrip) {
            // console.log(greenTrip);
            // console.log(greenTrip.eventDate);
            // greenTrip.eventDate = new Date(greenTrip.eventDate);
            // console.log(greenTrip.eventDate);
            res.send(greenTrip);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
       .put(function (req, res) {
        var trip = req.body;
        console.log("trying to update");
        procedures.procUpdateTrip(req.params.id, trip.eventName, trip.eventDescription, trip.eventDate, trip.eventCost, trip.maxSlots, trip.eventDetails, trip.publish)
            .then(function () {
                res.sendStatus(204);
            }, function (err) {
                console.log(err);
                res.sendStatus(500);
            });
    })
     .delete(function(req, res){
        console.log("TRYING TO DELETE");
        procedures.procDeleteTrip(req.params.id)
        .then(function(){
            res.sendStatus(204);
        }, function(err){
            console.log(err);
            res.sendStatus(500);
        });

    });

// = /api/AdminTrips/deleteAllTrips
router.route('/deleteAllTrips')
    .delete(function(req,res){
    procedures.procDeleteAllTripsAndSlots()
    .then(function(){
        res.sendStatus(204);
    }, function(err){
        res.sendStatus(500);
    });

    });


module.exports = router;