var db = require('../config/db');

exports.procGetAllPurpleEvents = function() {
    return db.fnRows('procGetAllPurpleEvents');    
}