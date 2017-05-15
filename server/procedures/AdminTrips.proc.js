var db = require('../config/db');


exports.procGetTrip = function(id) {
    return db.fnRow('procGetTrip', [id]);
}

exports.procInsertTrip = function(eventName, eventDescription, eventColorID, eventDate, eventTime, eventCost, eventMaxSlots) {
    console.log(eventName);
    console.log(eventDate);
    console.log(eventDescription);
    console.log(eventColorID);
    console.log(eventTime);
    console.log(eventCost);
    console.log(eventMaxSlots);
    return db.fnRow('procInsertTrip', [eventName, eventDescription, eventColorID, eventDate, eventTime, eventCost, eventMaxSlots] );
}

exports.procUpdateTrip = function(id, eventName, eventDescription, eventDate, eventTime, eventCost, eventMaxSlots) {
    return db.fnEmpty('procUpdateTrip', [id, eventName, eventDescription, eventDate, eventTime, eventCost, eventMaxSlots]);
}

exports.procDeleteTrip = function(id){
    return db.fnEmpty('procDeleteTrip', [id]);
}

exports.procDeleteAllTripsAndSlots = function(){
    return db.fnEmpty('procDeleteAllTripsAndSlots');
}