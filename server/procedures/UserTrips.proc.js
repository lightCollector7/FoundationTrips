var db = require('../config/db');

exports.procGetUserTrips = function(id) {
    return db.fnRows('procGetUserTrips', [id]);
}