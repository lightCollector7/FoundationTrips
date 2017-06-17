var db = require('../config/db');

exports.procGetTrips_Yellow = function() {
    return db.fnRows('procGetTrips_Yellow');    
}

exports.procGetTrips_Yellow_Current = function(){
    return db.fnRows('procGetTrips_Yellow_Current');
}
exports.procGetTrips_Orange_Future = function(){
    return db.fnRows('procGetTrips_Yellow_Future');
}

exports.procGetTrip = function(id) {
    return db.fnRow('procGetTrip', [id]);
}

exports.procGetSlotBySlotID = function(id) {
    return db.fnRow('procGetSlotBySlotID', [id]);
}

exports.procGetTripSlotsByEvent = function(id) {
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