var db = require('../config/db');

exports.procGetTrips_Rainbow_Current = function(){
    return db.fnRows('procGetTrips_Rainbow_Current');
}
exports.procGetTrips_Rainbow_Future = function(){
    return db.fnRows('procGetTrips_Rainbow_Future');
}

exports.procGetPublishedTrips_Rainbow_Current = function(){
    return db.fnRows('procGetPublishedTrips_Rainbow_Current');
}
exports.procGetPublishedTrips_Rainbow_Future = function(){
    return db.fnRows('procGetPublishedTrips_Rainbow_Future');
}

exports.procGetTrip = function(id) {
    return db.fnRow('procGetTrip', [id]);
}

exports.procInsertTrip = function(eventName, eventDate, eventDescription, eventColorID, eventTime, eventCost, eventMaxSlots) {
    return db.fnRow(eventName, eventDate, eventDescription, eventColorID, eventTime, eventCost, eventMaxSlots );
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


