var db = require('../config/db');

exports.procGetGreen1 = function() {
    return db.fnRows('procGetGreen1');    
}