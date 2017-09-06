var express = require('express');
var passport = require('passport');
var procedures = require('../procedures/users.proc');
var auth = require('../middleware/auth.mw');
var emailSvc = require('../services/email.svc');

var router = express.Router();

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        if (!user) { // login failure
            return res.status(401).send(info);
        }
        req.logIn(user, function(err) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            } else {
                return res.send(user);
            }
        });
    })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.session.destroy(function() {
        req.logOut();
        res.sendStatus(204);
    });
});

router.all('*', auth.isLoggedIn);

// =  this is actually /api/users/
router.route('/')
    .get(auth.isLoggedIn, function(req, res) {
        procedures.procGetUsers().then(function(data) {
            res.send(data);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
    .post(auth.isAdmin, function(req, res){  // make the procedure to create new users and finish this
        var u = req.body
        procedures.procInsertUser(u.firstName, u.lastName, u.email, u.password, u.colorID, u.role, u.subject, u.body)
        .then(function(data){
            emailSvc.sendEmail(req.body.toAddress, req.body.fromAddress, req.body.subject, req.body.body)     // is this right?
                        .then(function (success) {
                            console.log('payments.ctrl.js: email sent!');
                            res.sendStatus(204);
                        }, function(err) {
                            console.log('error sending email');
                            console.log(err);
                            res.sendStatus(500);
                        });
            res.status(201).send(data);

        }, function(err) {
            console.log(err);
            alert(err);
            res.sendStatus(500);
        });
    });

router.get('/me', function(req, res) {
    res.send(req.user);
});

// = /api/users/:id
router.route('/:id')
    .delete(function(req, res){
        procedures.procDeleteUserAndSlots(req.params.id)
        .then(function() {
            res.sendStatus(204);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        });
    })
    .put(function(req, res){
        var u = req.body;
        procedures.procUpdateUser(req.params.id, u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(){
            res.sendStatus(204);
        }, function(err){
            console.log(err);
            res.sendStatus(500);
        });
    })
    .get(function(req, res) {
        procedures.procGetUser(req.params.id).then(function(post) {
            res.send(post);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })

// = /api/users/:id
router.route('/edit/:id')
    .delete(function(req, res){
        procedures.procDeleteUserAndSlots(req.params.id)
        .then(function() {
            res.sendStatus(204);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        
        });
    })
    .put(function(req, res){
        var u = req.body;
        procedures.procUpdateUser(req.params.id, u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
        .then(function(){
            res.sendStatus(204);
        }, function(err){
            console.log(err);
            res.sendStatus(500);
        });
    })
    .get(function(req, res) {
        procedures.procGetUserToEdit(req.params.id).then(function(post) {
            res.send(post);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })




module.exports = router;