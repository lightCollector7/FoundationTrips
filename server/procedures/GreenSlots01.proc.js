var db = require('../config/db');

exports.procGetGreenSlots01 = function() {
    return db.fnRows('procGetGreenSlots01');    
}

exports.procInsertMEintoGreenSlots01 = function(firstName, lastName, waitlist, paid, colorID, userID) {
    return db.fnRow('procInsertMEintoGreenSlots01', [firstName, lastName, waitlist, paid, colorID, userID]);
}
