var express = require('express');
var passport = require('passport');
var procedures = require('../procedures/users.proc');
var auth = require('../middleware/auth.mw');
var emailSvc = require('../services/email.svc');
var utils = require('../utils');

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
        var hash = utils.encryptPassword(u.password).then(function(hash){              
        console.log('var u: ');
        console.log(u);
        console.log('hash: ');
        console.log(hash);
        procedures.procInsertUser(u.firstName, u.lastName, u.email, hash, u.colorID, u.role, u.subject, u.body, u.fromAddress, u.toAddress, u.password)
        .then(function(data){
            console.log(data);
            res.status(201).send(data);
            return u;
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
        }).then(function(u){
            console.log('u: ')
            console.log(u); 
            console.log(u.toAddress);
            emailSvc.sendEmail(u.toAddress, u.fromAddress, u.subject, u.body)
            .then(function(success){
                res.status(204).send('email sent')
            }, function(err){
                console.log('adminUsers.ctrl.js: There was an error!');
                console.log(err);
                res.status(500);
            });
        });
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
        var hash = utils.encryptPassword(u.password).then(function(hash){              
        console.log('var u: ');
        console.log(u);
        console.log('hash: ');
        console.log(hash);
        procedures.procInsertUser(u.firstName, u.lastName, u.email, hash, u.colorID, u.role, u.subject, u.body, u.fromAddress, u.toAddress, u.password)
        .then(function(data){
            console.log(data);
            res.status(201).send(data);
            return u;
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
        }).then(function(u){
            console.log('u: ')
            console.log(u); 
            console.log(u.toAddress);
            emailSvc.sendEmail(u.toAddress, u.fromAddress, u.subject, u.body)
            .then(function(success){
                res.status(204).send('email sent')
            }, function(err){
                console.log('adminUsers.ctrl.js: There was an error!');
                console.log(err);
                res.status(500);
            });
        });
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
        var hash = utils.encryptPassword(u.password).then(function(hash){              
        console.log('var u: ');
        console.log(u);
        console.log('hash: ');
        console.log(hash);
        procedures.procInsertUser(u.firstName, u.lastName, u.email, hash, u.colorID, u.role, u.subject, u.body, u.fromAddress, u.toAddress, u.password)
        .then(function(data){
            console.log(data);
            res.status(201).send(data);
            return u;
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
        }).then(function(u){
            console.log('u: ')
            console.log(u); 
            console.log(u.toAddress);
            emailSvc.sendEmail(u.toAddress, u.fromAddress, u.subject, u.body)
            .then(function(success){
                res.status(204).send('email sent')
            }, function(err){
                console.log('adminUsers.ctrl.js: There was an error!');
                console.log(err);
                res.status(500);
            });
        });
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
        var hash = utils.encryptPassword(u.password).then(function(hash){              
        console.log('var u: ');
        console.log(u);
        console.log('hash: ');
        console.log(hash);
        procedures.procInsertUser(u.firstName, u.lastName, u.email, hash, u.colorID, u.role, u.subject, u.body, u.fromAddress, u.toAddress, u.password)
        .then(function(data){
            console.log(data);
            res.status(201).send(data);
            return u;
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
        }).then(function(u){
            console.log('u: ')
            console.log(u); 
            console.log(u.toAddress);
            emailSvc.sendEmail(u.toAddress, u.fromAddress, u.subject, u.body)
            .then(function(success){
                res.status(204).send('email sent')
            }, function(err){
                console.log('adminUsers.ctrl.js: There was an error!');
                console.log(err);
                res.status(500);
            });
        });
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
        var hash = utils.encryptPassword(u.password).then(function(hash){              
        console.log('var u: ');
        console.log(u);
        console.log('hash: ');
        console.log(hash);
        procedures.procInsertUser(u.firstName, u.lastName, u.email, hash, u.colorID, u.role, u.subject, u.body, u.fromAddress, u.toAddress, u.password)
        .then(function(data){
            console.log(data);
            res.status(201).send(data);
            return u;
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
        }).then(function(u){
            console.log('u: ')
            console.log(u); 
            console.log(u.toAddress);
            emailSvc.sendEmail(u.toAddress, u.fromAddress, u.subject, u.body)
            .then(function(success){
                res.status(204).send('email sent')
            }, function(err){
                console.log('adminUsers.ctrl.js: There was an error!');
                console.log(err);
                res.status(500);
            });
        });
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
    });






module.exports = router;




