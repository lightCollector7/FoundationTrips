var express = require('express');
var procedures = require('../procedures/AdminTripSlots.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();



// = /api/AdminTripSlots/slot/:slotID
router.route('/slot/:slotID')
    .get(function(req, res) {
        procedures.procGetSlotBySlotID(req.params.slotID).then(function(singleSlot){
            res.send(singleSlot);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        });
    })
    .put(function (req, res) {
        var slot = req.body;
        console.log("trying to update");
        procedures.procUpdateSlot(req.params.slotID, slot.paid)
            .then(function () {
                res.sendStatus(204);
            }, function (err) {
                console.log(err);
                res.sendStatus(500);
            });
    })
    .delete(function(req, res){
        console.log("TRYING TO DELETE");
        procedures.procDeleteSlot(req.params.slotID)
        .then(function(){
            res.sendStatus(204);
        }, function(err){
            console.log(err);
            res.sendStatus(500);
        });

    });


module.exports = router;