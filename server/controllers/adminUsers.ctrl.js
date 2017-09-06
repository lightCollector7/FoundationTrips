var express = require('express');
var passport = require('passport');
var procedures = require('../procedures/users.proc');
var auth = require('../middleware/auth.mw');
var emailSvc = require('../services/email.svc');

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
     .post(auth.isAdmin, function(req, res){  
        var u = req.body
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role, u.subject, u.body, u.fromAddress)
        .then(function(data){
            // emailSvc.sendEmail(req.body.toAddress, req.body.fromAddress, req.body.subject, req.body.body);
            // console.log('email sent');
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
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
    .post(auth.isAdmin, function(req, res){  
        var u = req.body
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(data){
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
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
     .post(auth.isAdmin, function(req, res){  
        var u = req.body
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(data){
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
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
     .post(auth.isAdmin, function(req, res){  
        var u = req.body
        console.log('u: ');
        console.log(u);
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(data){
            res.status(201).send(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });
router.route('/AdminUsers')
    .get(function(req, res) {
        procedures.procGetUsersAdmins().then(function(adminUsers) {
            res.send(adminUsers);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
     .post(auth.isAdmin, function(req, res){  
        var u = req.body
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role, u.subject, u.body, u.fromAddress)
        .then(function(data){
            
            res.status(201).send(data);
            return u;
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
        }).then(function(u){
            console.log('u: ')
            console.log(u); // this works
            // emailSvc.sendEmail(req.body.toAddress, req.body.fromAddress, req.body.subject, req.body.body); //this doesn't work'
            // console.log('email sent'); //but this is happening
        });
     });

router.route('/Participant/')  
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




