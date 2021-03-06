var db = require('../config/db');


exports.procGetTrip = function(id) {
    return db.fnRow('procGetTrip', [id]);
}

exports.procInsertTrip = function(eventName, eventDescription, eventColorID, eventDate, eventTime, eventCost, eventMaxSlots, eventDetails, publish) {
    console.log(eventName);
    console.log(eventDate);
    console.log(eventDescription);
    console.log(eventColorID);
    console.log(eventTime);
    var formattedDate = new Date(eventDate);
    console.log(eventCost);
    console.log(eventMaxSlots);
    console.log('publish value: ');
    console.log(publish);
    return db.fnRow('procInsertTrip', [eventName, eventDescription, eventColorID, formattedDate, eventTime, eventCost, eventMaxSlots, eventDetails, publish] );
}

exports.procUpdateTrip = function(id, eventName, eventDescription, eventDate, eventCost, eventMaxSlots, eventDetails, publish) {
    console.log(eventDate);
   
    var formattedDate = Date.parse(eventDate);  
    console.log("formattedDate: ")
    console.log(formattedDate);
    formattedDate = new Date(formattedDate);
    console.log(formattedDate);
    console.log('publish value: ')
    console.log(publish);
    return db.fnEmpty('procUpdateTrip', [id, eventName, eventDescription, formattedDate, eventCost, eventMaxSlots, eventDetails, publish]);
}

exports.procDeleteTrip = function(id){
    return db.fnEmpty('procDeleteTrip', [id]);
}

exports.procDeleteAllTripsAndSlots = function(){
    return db.fnEmpty('procDeleteAllTripsAndSlots');
}