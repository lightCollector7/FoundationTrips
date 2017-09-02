var db = require('../config/db');

exports.procGetSlotBySlotID = function(id) {
    return db.fnRow('procGetSlotBySlotID', [id]);
}

exports.procUpdateSlot = function(id, paidValue){
    console.log("id: ")
    console.log(id);
    console.log('paidValue: ')
    console.log(paidValue);
    return db.fnEmpty('procUpdateSlot', [id, paidValue]);
}

exports.procDeleteSlot = function(id){
    console.log(id)
    return db.fnEmpty('procDeleteSlot', [id] );
}

exports.procSignParticipantUp = function(userID, eventID, colorID, paid) {
    console.log('userID: ');
    console.log(userID);
    console.log("eventID: ");
    console.log(eventID);
    console.log('colorID: ');
    console.log(colorID);
    console.log('paid: ');
    console.log(paid);
    return db.fnRow('procSignParticipantUp', [userID, eventID, colorID, paid]);
}