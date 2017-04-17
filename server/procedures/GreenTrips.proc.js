var db = require('../config/db');

exports.procGetTrips_Green = function() {
    return db.fnRows('procGetTrips_Green');    
}

exports.procGetTrip_Green = function(id) {
    return db.fnRow('procGetTrip', [id]);
}

exports.procGetTripSlots_Green = function(id) {
    return db.fnRow('procGetTripSlots_Green', [id]);
}

