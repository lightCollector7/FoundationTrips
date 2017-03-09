var db = require('../config/db');

exports.procGetAllYellowEvents = function() {
    return db.fnRows('procGetAllYellowEvents');    
}