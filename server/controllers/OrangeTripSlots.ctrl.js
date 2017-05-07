var express = require('express');
var procedures = require('../procedures/OrangeTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();



// = /api/OrangeTripSlots/
router.route('/')
      .post(function (req, res) {
        var u = req.body;
        procedures.procSignMeUp(u.userID, u.eventID, u.colorID)
            .then(function (id) {
                res.status(201).send(id);
            }, function (err) {
                console.log(err);
                res.sendStatus(500);
            });
    });

// = /api/OrangeTripSlots/:eventID/:userID/:slotID
router.route('/:eventID/:userID/:slotID')
    .get(function(req,res) {
        procedures.procGetSlotByUserAndTrip(req.params.eventID, req.params.userID).then(function(orangeTripUserSlot){
            res.send(orangeTripUserSlot);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        })
    })
   

// = /api/OrangeTripSlots/:eventID/:userID
router.route('/:eventID/:userID')
    .get(function(req,res) {
        procedures.procGetSlotByUserAndTrip(req.params.eventID, req.params.userID).then(function(orangeTripUserSlot){
            res.send(orangeTripUserSlot);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        })
    })

// = /api/OrangeTripSlots/:eventID
router.route('/:eventID')
    .get(function(req, res) {
    procedures.procGetTripSlotsByEvent(req.params.eventID).then(function(orangeTripSlots) {
            res.send(orangeTripSlots);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })




router.route('/delete/:slotID')
     .delete(function(req, res){
        procedures.procRemoveMe(req.params.slotID).then(function(){
            res.sendStatus(204);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
   

module.exports = router;