var db = require('../config/db');

exports.procGetAllGreenEvents = function() {
    return db.fnRows('procGetAllGreenEvents');    
}