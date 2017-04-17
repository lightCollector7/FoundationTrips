var db = require('../config/db');

exports.procGetTrips_Purple = function() {
    return db.fnRows('procGetTrips_Purple');    
}

exports.procGetTrip_Purple = function(id) {
    return db.fnRow('procGetTrip', [id]);
}