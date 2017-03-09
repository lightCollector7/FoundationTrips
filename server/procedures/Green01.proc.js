var db = require('../config/db');

exports.procGetGreen01 = function() {
    return db.fnRows('procGetGreen01');    
}