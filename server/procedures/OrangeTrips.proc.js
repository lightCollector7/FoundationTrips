var db = require('../config/db');

exports.procGetTrips_Orange = function() {
    return db.fnRows('procGetTrips_Orange');    
}

exports.procGetTrip_Orange = function(id) {
    return db.fnRow('procGetTrip', [id]);
}

exports.procGetSlotBySlotID = function(id) {
    return db.fnRow('procGetSlotBySlotID', [id]);
}

exports.procGetTripSlotsByEvent = function(id) {
    console.log('id of event: ', id);
    return db.fnRows('procGetTripSlotsByEvent', [id]);
}

exports.procSignMeUp = function(userID, eventID, colorID) {
    return db.fnRow('procSignMeUp', [userID, eventID, colorID]);
}

exports.procGetSlotByUserAndTrip = function(eventID, userID) {
    console.log('eventID: ', eventID);
    console.log('userID: ', userID);
    return db.fnRow('procGetSlotByUserAndTrip', [eventID, userID])
}

exports.procRemoveMe = function(slotID) {
    return db.fnEmpty('procRemoveMe', [slotID])
}
