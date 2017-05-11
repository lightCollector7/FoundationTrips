var express = require('express');
var procedures = require('../procedures/GreenTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();



// = /api/GreenTripSlots
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

// // = /api/GreenTripSlots/slot/:slotID           ONLY NEED FOR AdminTripSlots.ctrl
// router.route('/slot/:slotID')
//     .get(function(req, res) {
//         procedures.procGetSlotBySlotID(req.params.slotID).then(function(singleSlot){
//             res.send(singleSlot);
//         }, function(err) {
//             console.log(err);
//             res.sendStatus(500);
        
//         });
//     })
//     .put(function (req, res) {
//         var e = req.body;
//         procedures.procUpdateSlot(req.params.id, u.paid)
//             .then(function () {
//                 res.sendStatus(204);
//             }, function (err) {
//                 console.log(err);
//                 res.sendStatus(500);
//             });
//     })

// = /api/GreenTripSlots/:eventID/:userID/:slotID
router.route('/:eventID/:userID/:slotID')
    .get(function(req,res) {
        procedures.procGetSlotByUserAndTrip(req.params.eventID, req.params.userID).then(function(greenTripUserSlot){
            res.send(greenTripUserSlot);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        })
    })
   

// = /api/GreenTripSlots/:eventID/:userID
router.route('/:eventID/:userID')
    .get(function(req,res) {
        procedures.procGetSlotByUserAndTrip(req.params.eventID, req.params.userID).then(function(greenTripUserSlot){
            res.send(greenTripUserSlot);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        })
    })

// = /api/GreenTripSlots/:eventID
router.route('/:eventID')
    .get(function(req, res) {
    procedures.procGetTripSlotsByEvent(req.params.eventID).then(function(greenTripSlots) {
            res.send(greenTripSlots);
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