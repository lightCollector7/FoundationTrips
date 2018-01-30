var db = require('../config/db');

exports.procGetUsers = function() {
    return db.fnRows('procGetUsers');    
}

exports.procGetParticipant = function(firstName, lastName){
    console.log('users.proc.js 8: ')
    console.log(firstName);
    console.log(lastName);
    return db.fnRow('procGetParticipant', [firstName, lastName]);
}

exports.procGetUsersGreen = function() {
    return db.fnRows('procGetUsersGreen');
}
exports.procGetUsersOrange = function() {
    return db.fnRows('procGetUsersOrange');
}
exports.procGetUsersPurple = function() {
    return db.fnRows('procGetUsersPurple');
}
exports.procGetUsersYellow = function() {
    return db.fnRows('procGetUsersYellow');
}
exports.procGetUsersAdmins = function() {
    return db.fnRows('procGetUsersAdmins');
}

exports.procGetUserByEmail = function(email){
        return db.fnRow('procGetUserByEmail',[email]);
}

exports.procGetUserByUserName = function(userName){                 // use this for passport.js instead
        return db.fnRow('procGetUserByUserName',[userName]);
}

exports.procGetUser = function(id){
    return db.fnRow('procGetUser', [id]);
}

exports.procGetUserToEdit = function(id, newHash){
    console.log('MAYBE HERE: ')
    console.log('proc.newHash: ' +newHash);
    return db.fnRow('procGetUserToEdit', [id]);
    
}




exports.procInsertUser = function(firstname, lastname, email, password, colorID, role){
    console.log(password);
    return db.fnRow('procInsertUser', [firstname, lastname, email, password, colorID, role])  
}

exports.procUpdateUser = function(id, firstName, lastName, email, colorID, role){
    console.log(id);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    
    console.log(colorID);
    console.log(role);

    return db.fnEmpty('procUpdateUser', [id, firstName, lastName, email, colorID, role])
}

exports.procAdminResetPassword = function(id, password, userName){ //added userName
    console.log(password);
    console.log(userName);
    return db.fnEmpty('procAdminResetPassword', [id, password, username])
}

exports.procUserUpdatePassword = function(id, password){  
    console.log(password);
    return db.fnEmpty('procAdminResetPassword', [id, password])
}

exports.procDeleteUser = function(id){
   return db.fnEmpty('procDeleteUser', [id]);
}
exports.procDeleteUserAndSlots = function(id){
    return db.fnEmpty('procDeleteUserAndSlots', [id]);
}