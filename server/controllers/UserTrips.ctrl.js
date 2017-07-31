var express = require('express');
var procedures = require('../procedures/UserTrips.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();


router.route('/current/:userID')
    .get(function(req,res) {
        procedures.procGetUserTrips_Current(req.params.userID).then(function(userTrips){
            res.send(userTrips);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        })
    })

router.route('/future/:userID')
    .get(function(req,res) {
        procedures.procGetUserTrips_Future(req.params.userID).then(function(userTrips){
            res.send(userTrips);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        })
    })

router.route('/currentFuture/:userID')
    .get(function(req, res){
          procedures.procGetUserTrips_CurrentFuture(req.params.userID).then(function(userTrips){
            res.send(userTrips);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        })
    })

router.route('/:userID')
    .get(function(req,res) {
        procedures.procGetUserTrips(req.params.userID).then(function(userTrips){
            res.send(userTrips);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        })
    })

module.exports = router;