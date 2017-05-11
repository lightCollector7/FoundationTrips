var db = require('../config/db');

exports.procGetSlotBySlotID = function(id) {
    return db.fnRow('procGetSlotBySlotID', [id]);
}

exports.procUpdateSlot = function(id, paidValue){
    console.log(id);
    console.log(paidValue);
    return db.fnEmpty('procUpdateSlot', [id, paidValue]);
}

exports.procDeleteSlot = function(id){
    console.log(id)
    return db.fnEmpty('procDeleteSlot', [id] );
}