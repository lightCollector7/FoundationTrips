var express = require('express');
var passport = require('passport');
var procedures = require('../procedures/users.proc');
var auth = require('../middleware/auth.mw');

var router = express.Router();

router.route('/GreenUsers')
    .get(function(req, res) {
        procedures.procGetUsersGreen().then(function(greenUsers) {
            res.send(greenUsers);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
     .post(auth.isAdmin, function(req, res){  // make the procedure to create new users and finish this
        var u = req.body
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(data){
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
            // alert(err);
            res.sendStatus(500);
        });
    });

router.route('/OrangeUsers')
    .get(function(req, res) {
        procedures.procGetUsersOrange().then(function(orangeUsers) {
            res.send(orangeUsers);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    }) 
    .post(auth.isAdmin, function(req, res){  // make the procedure to create new users and finish this
        var u = req.body
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(data){
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
            // alert(err);
            res.sendStatus(500);
        });
    });

router.route('/PurpleUsers')
    .get(function(req, res) {
        procedures.procGetUsersPurple().then(function(purpleUsers) {
            res.send(purpleUsers);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
     .post(auth.isAdmin, function(req, res){  // make the procedure to create new users and finish this
        var u = req.body
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(data){
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
            // alert(err);
            res.sendStatus(500);
        });
    });

    
router.route('/YellowUsers')
    .get(function(req, res) {
        procedures.procGetUsersYellow().then(function(yellowUsers) {
            res.send(yellowUsers);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
     .post(auth.isAdmin, function(req, res){  // make the procedure to create new users and finish this
        var u = req.body
        console.log('u: ');
        console.log(u);
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(data){
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
            // alert(err);
            res.sendStatus(500);
        });
    });
router.route('/AdminUsers')
    .get(function(req, res) {
        procedures.procGetUsersAdmins().then(function(yellowUsers) {
            res.send(yellowUsers);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
     .post(auth.isAdmin, function(req, res){  // make the procedure to create new users and finish this
        var u = req.body
        console.log('u: ');
        console.log(u);
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(data){
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
            // alert(err);
            res.sendStatus(500);
        });
    });

router.route('/Participant/')       // is this written right?
    .get(function(req, res) {
        console.log('adminUsers.ctrl.js 97: ');
        console.log('req.query.firstName');
        console.log(req.query.firstName);
        console.log('req.query.lastName');
        console.log(req.query.lastName);
        var fN = req.query.firstName;
        var lN = req.query.lastName;
        procedures.procGetParticipant(fN, lN).then(function(participant) {
            
            res.send(participant);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })





module.exports = router;




