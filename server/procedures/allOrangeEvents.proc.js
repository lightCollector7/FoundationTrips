var db = require('../config/db');

exports.procGetAllOrangeEvents = function() {
    return db.fnRows('procGetAllOrangeEvents');    
}