var express = require('express');
var ctrlColors = require('./controllers/colors.ctrl');
var ctrlUsers = require('./controllers/users.ctrl');
// var ctrlAllEvents = require('./controllers/allEvents.ctrl');
var ctrlGreenTrips = require('./controllers/GreenTrips.ctrl')
var ctrlOrangeTrips = require('./controllers/OrangeTrips.ctrl')
var ctrlPurpleTrips = require('./controllers/PurpleTrips.ctrl')
var ctrlYellowTrips = require('./controllers/YellowTrips.ctrl')

var ctrlGreenTripSlots = require('./controllers/GreenTripSlots.ctrl')
var ctrlOrangeTripSlots = require('./controllers/OrangeTripSlots.ctrl')
var ctrlPurpleTripSlots = require('./controllers/PurpleTripSlots.ctrl')
var ctrlYellowTripSlots = require('./controllers/YellowTripSlots.ctrl')

var ctrlAdminTripSlots = require('./controllers/AdminTripSlots.ctrl')






var router = express.Router();

router                              
    .use('/users', ctrlUsers)
    .use('/colors', ctrlColors)
    // .use('/allEvents', ctrlAllEvents)
    .use('/GreenTrips', ctrlGreenTrips)
    .use('/OrangeTrips', ctrlOrangeTrips)
    .use('/PurpleTrips', ctrlPurpleTrips)
    .use('/YellowTrips', ctrlYellowTrips)

    .use('/GreenTripSlots', ctrlGreenTripSlots)
    .use('/OrangeTripSlots', ctrlOrangeTripSlots)
    .use('/PurpleTripSlots', ctrlPurpleTripSlots)
    .use('/YellowTripSlots', ctrlYellowTripSlots)
    .use('/AdminTripSlots', ctrlAdminTripSlots)

   

module.exports = router;