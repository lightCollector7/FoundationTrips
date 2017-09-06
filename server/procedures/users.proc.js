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

exports.procGetUser = function(id){
    return db.fnRow('procGetUser', [id]);
}

exports.procGetUserToEdit = function(id){
    return db.fnRow('procGetUserToEdit', [id]);
}




exports.procInsertUser = function(firstname, lastname, email, password, colorID, role){
    return db.fnRow('procInsertUser', [firstname, lastname, email, password, colorID, role])  
}

exports.procUpdateUser = function(id, firstName, lastName, email, password, colorID, role){
    console.log(id);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(colorID);
    console.log(role);

    return db.fnEmpty('procUpdateUser', [id, firstName, lastName, email, password, colorID, role])
}

exports.procDeleteUser = function(id){
   return db.fnEmpty('procDeleteUser', [id]);
}
exports.procDeleteUserAndSlots = function(id){
    return db.fnEmpty('procDeleteUserAndSlots', [id]);
}