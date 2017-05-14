var db = require('../config/db');

exports.procGetUsers = function() {
    return db.fnRows('procGetUsers');    
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

exports.procGetUserByEmail = function(email){
        return db.fnRow('procGetUserByEmail',[email]);
}

exports.procGetUser = function(id){
    return db.fnRow('procGetUser', [id]);
}


exports.procInsertUser = function(firstname, lastname, email, password, colorID, role){
    return db.fnRow('procInsertUser', [firstname, lastname, email, password, colorID, role])  
}

exports.procUpdateUser = function(id,firstname, lastname, email, role){
    return db.fnEmpty('procUpdateUser', [id, firstname, lastname, email, role])
}

exports.procDeleteUser = function(id){
   return db.fnEmpty('procDeleteUser', [id]);
}