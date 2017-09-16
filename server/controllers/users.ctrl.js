var express = require('express');
var passport = require('passport');
var procedures = require('../procedures/users.proc');
var auth = require('../middleware/auth.mw');
var emailSvc = require('../services/email.svc');
var utils = require('../utils');
// var bcrypt = require('bcrypt');

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
    // .put(function(req, res){     // when updating a user included password (and emailSvc)
    //     var u = req.body;
    //     procedures.procUpdateUser(req.params.id, u.firstName, u.lastName, u.email, u.password, u.colorID, u.role)
    //     .then(function(){
    //         res.sendStatus(204);
    //         return u;
    //     }, function(err){
    //         console.log(err);
    //         res.sendStatus(500);
    //     }).then(function(u){
    //         console.log('u: ')
    //         console.log(u);
    //         console.log(u.email);
    //         console.log('new password: ');
    //         console.log(u.password);
    //         emailSvc.sendNewPwordEmail(u.email, u.password)
    //         .then(function(success){
    //             res.status(204).send('email sent')
    //         }, function(err){
    //             console.log('adminUsers.ctrl.js: There was an error!');
    //             console.log(err);
    //             res.status(500);
    //         });
    //     })
    // })
    .put(function(req, res){
        var u = req.body;
        procedures.procUpdateUser(req.params.id, u.firstName, u.lastName, u.email, u.colorID, u.role)
        .then(function(){
            res.sendStatus(204);
            return u;
        }, function(err){
            console.log(err);
            res.sendStatus(500);
        })
    })

    .get(function(req, res) {
        procedures.procGetUserToEdit(req.params.id).then(function(post) {
            res.send(post);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    })

router.route('/admin/edit/password/:id')
        .put(function(req, res){     // when updating a user included password (and emailSvc)
        var u = req.body;
        var hash = utils.encryptPassword(u.password).then(function(hash){

        
        procedures.procAdminResetPassword(req.params.id, hash, u.email)
        .then(function(){
            res.sendStatus(204);
            return u;
        }, function(err){
            console.log(err);
            res.sendStatus(500);
        }).then(function(u){
            console.log('u: ')
            console.log(u);
            console.log(u.email);
            console.log('new password: ');
            console.log(u.password);
            emailSvc.sendNewPwordEmail(u.email, u.password)
            .then(function(success){
                res.status(204).send('email sent')
            }, function(err){
                console.log('adminUsers.ctrl.js: There was an error!');
                console.log(err);
                res.status(500);
            });
        })
    })
    })

router.route('/user/edit/password/:id')
        .put(function(req, res){     // when updating a user included password (and emailSvc)
        var u = req.body;
        console.log(u);
        console.log(u.newPassword);
        console.log(u.confirmOldPassword);
        var confirmOldPassword = u.confirmOldPassword;
        var newHash = utils.encryptPassword(u.newPassword).then(function(newHash){
                // var confirmOldHash = utils.encryptPassword(u.confirmOldPassword).then(function(confirmOldHash){
                    console.log('req.params.id: ' + req.params.id);
                    
                    console.log('u.confirmOldPassword: ' + u.confirmOldPassword);;
                    console.log('newHash: ' + newHash);
                    // console.log('confirmOldHash: ' + confirmOldHash);
                    
                    procedures.procGetUserToEdit(req.params.id, newHash)
                    .then(function(userToEdit){
                        console.log('userToEdit: ' + userToEdit);
                        console.log(userToEdit);

                        var oldPassword = userToEdit.password;
                        console.log('oldPassword: ' + oldPassword);
                        console.log("newHash: " + newHash);
                        var data={
                            
                            oldPassword: oldPassword,
                            confirmOldPassword: confirmOldPassword,
                            newHash: newHash,
                            email: u.email,
                            newPassword: u.password
                              
                        }
                        console.log(data);
                        return data;
                    }).then(function(data){
                            console.log('data.oldPassword HERE: ' + data.oldPassword);
                            console.log('data.newHash: ' + data.newHash);
                            procedures.procUserUpdatePassword(req.params.id, data.newHash)
                            .then(function(){

                                utils.checkPassword(data.confirmOldPassword, data.oldPassword).then(function(passwordsMatch){
                                    console.log('utils.checkPassword is doing its thing');
                                    console.log('passwordsMatch: ? ' + passwordsMatch);
                                    console.log('data.confirmOldPassword'+ data.confirmOldPassword);
                                    console.log('data.oldPassword: ' + data.oldPassword);
                                    if (passwordsMatch) {
                                        res.sendStatus(204);
                                        // return done(null, user);
                                        return u;
                                    } else {
                                        console.log(' utils.checkPassword: error');
                                        res.sendStatus(500);
                                        return done(null, false, {message: 'failed to confirm old Password!'});
                                    }
                                })
                            }).then(function(u){ // NOW GET THIS WORKING!
                                console.log('u:' +u);
                                console.log('u.email: ' + u.email);
                                console.log('new password: ');
                                console.log('u.password: ' + u.password);
                                emailSvc.sendNewPwordEmail(u.email, u.newPassword)
                                .then(function(success){
                                    res.status(204).send('email sent')
                                }, function(err){
                                    console.log('adminUsers.ctrl.js: There was an error!');
                                    console.log(err);
                                    res.status(500);
                                });
                            })
                    })

            });
    // });
        
    })





module.exports = router;