var db = require('../config/db');

exports.procGetEveryEvent = function() {
    return db.fnRows('procGetEveryEvent');    
}