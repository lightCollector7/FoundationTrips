var mysql = require('mysql');

//=============FOR RDS DATABASE===================//

var pool = mysql.createPool({
    // process.env.JAWSDB_URL + '?connectionLimit=10' 

    connectionLimit:10,
    host: process.env.HEROKU_DB_URL,
    user: process.env.HEROKU_DB_USER,
    password: process.env.HEROKU_DB_PASSWORD,
    database: process.env.HEROKU_DB_DATABASE
});

//-------------------------------------------------------


//==================FOR LOCAL DATABASE===========//
// var pool = mysql.createPool({
//     connectionLimit:10,      // DOES THIS NEED TO CHANGE FOR PRODUCTION??
//     host: 'localhost',       
//     user: 'CharleyHannah',   
//     password: 'cphpl8285',   
//     database: 'efTrips'      
// });
//----------------------------------------------//

exports.pool = pool;


// Use this function to call a procedure that doesn't return anything
exports.fnEmpty = function(procName, args) {
    return callProcedure(procName, args)
        .then( function() {} ); // throwing away the resultset
}

// Use this function to call a procedure when expecting a single item back
exports.fnRow = function(procName, args) {
    return callProcedure(procName, args)
            .then(function(resultsets) {
                return resultsets[0][0];
            });
}

// Use this function to call a procedure when expecting multiple rows back
exports.fnRows = function(procName, args) {
    return callProcedure(procName, args)
            .then(function(resultsets) {
                return resultsets[0];
            });
}

// Do not call this directly
function callProcedure(procName, args) {
    if (!args) {
        args = [];
    }
    var argString = '';
    for (var i = 0; i < args.length; i++) {
        if (i === args.length - 1) { // we're on the last argument
            argString += '?';
        } else {
            argString += '?,';
        }
    }
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query('CALL ' + procName + '(' + argString + ');', args, function(err, resultsets) {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(resultsets);
                    }
                });
            }
        });
    });
}