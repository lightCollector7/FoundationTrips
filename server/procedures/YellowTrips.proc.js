var db = require('../config/db');

exports.procGetTrips_Yellow = function() {
    return db.fnRows('procGetTrips_Yellow');    
}

exports.procGetTrip_Yellow = function(id) {
    return db.fnRow('procGetTrip', [id]);
}