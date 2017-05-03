var db = require('../config/db');

exports.procGetTrips_Green = function() {
    return db.fnRows('procGetTrips_Green');    
}

exports.procGetTrip_Green = function(id) {
    return db.fnRow('procGetTrip', [id]);
}

exports.procGetTripSlotsByEvent = function(id) {
    return db.fnRows('procGetTripSlotsByEvent', [id]);
}

exports.procSignMeUp = function(userID, eventID, colorID) {
    return db.fnRow('procSignMeUp', [userID, eventID, colorID]);
}

exports.procGetSlotByUserAndTrip = function(userID, eventID) {
    return db.fnRow('procGetSlotByUserAndTrip', [userID, eventID])
}

exports.procRemoveMe = function(slotID) {
    return db.fnEmpty('procRemoveMe', [slotID])
}

