var db = require('../config/db');

exports.procGetColors = function() {
    return db.fnRows('procGetColors');    
}