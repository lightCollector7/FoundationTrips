var db = require('../config/db');


exports.procGetTrip = function(id) {
    return db.fnRow('procGetTrip', [id]);
}

exports.procUpdateTrip = function(id, eventName, eventDescription, eventDate, eventTime, eventCost, eventMaxSlots) {
    return db.fnEmpty('procUpdateTrip', [id, eventName, eventDescription, eventDate, eventTime, eventCost, eventMaxSlots]);
}

exports.procDeleteTrip = function(id){
    return db.fnEmpty('procDeleteTrip', [id]);
}