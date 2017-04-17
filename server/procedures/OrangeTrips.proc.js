var db = require('../config/db');

exports.procGetTrips_Orange = function() {
    return db.fnRows('procGetTrips_Orange');    
}

exports.procGetTrip_Orange = function(id) {
    return db.fnRow('procGetTrip', [id]);
}