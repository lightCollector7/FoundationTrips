var db = require('../config/db');

exports.procGetTrips_Green = function() {
    return db.fnRows('procGetTrips_Green');    
}

exports.procGetTrip_Green = function(id) {
    return db.fnRow('procGetTrip', [id]);
}

exports.procGetSlotBySlotID = function(id) {
    return db.fnRow('procGetSlotBySlotID', [id]);
}

exports.procUpdateSlot = function(id, paidValue){
    return db.fnEmpty('procUpdateSlot', [id, paidValue]);
}

exports.procGetTripSlotsByEvent = function(id) {
    console.log('id of event: ', id);
    return db.fnRows('procGetTripSlotsByEvent', [id]);
}

exports.procSignMeUp = function(userID, eventID, colorID) {
    return db.fnRow('procSignMeUp', [userID, eventID, colorID]);
}

exports.procGetSlotByUserAndTrip = function(eventID, userID) {
    return db.fnRow('procGetSlotByUserAndTrip', [eventID, userID])
}

exports.procRemoveMe = function(slotID) {
    return db.fnEmpty('procRemoveMe', [slotID])
}

