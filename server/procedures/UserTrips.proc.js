var db = require('../config/db');

exports.procGetUserTrips_Current = function(id) {
    return db.fnRows('procGetUserTrips_Current', [id]);
}

exports.procGetUserTrips_Future = function(id) {
    return db.fnRows('procGetUserTrips_Future', [id]);
}

exports.procGetUserTrips = function(id) {
    return db.fnRows('procGetUserTrips', [id]);
}