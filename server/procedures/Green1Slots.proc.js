var db = require('../config/db');

exports.procGetGreen1Slots = function() {
    return db.fnRows('procGetGreen1Slots');    
}