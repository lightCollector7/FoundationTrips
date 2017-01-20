var db = require('../config/db');

exports.procGetUsers = function() {
    return db.fnRows('procGetUsers');    
}