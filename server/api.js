var express = require('express');



var ctrlUsers = require('./controllers/users.ctrl');
var ctrlAdminUsers = require('./controllers/AdminUsers.ctrl')

var ctrlColors = require('./controllers/colors.ctrl');




var ctrlCurrentGreenTrips = require('./controllers/CurrentGreenTrips.ctrl')
var ctrlFutureGreenTrips = require('./controllers/FutureGreenTrips.ctrl')
var ctrlCurrentOrangeTrips = require('./controllers/CurrentOrangeTrips.ctrl')
var ctrlFutureOrangeTrips = require('./controllers/FutureOrangeTrips.ctrl')
var ctrlCurrentPurpleTrips = require('./controllers/CurrentPurpleTrips.ctrl')
var ctrlFuturePurpleTrips = require('./controllers/FuturePurpleTrips.ctrl')
var ctrlCurrentYellowTrips = require('./controllers/CurrentYellowTrips.ctrl')
var ctrlFutureYellowTrips = require('./controllers/FutureYellowTrips.ctrl')
var ctrlCurrentRainbowTrips = require('./controllers/CurrentRainbowTrips.ctrl')
var ctrlFutureRainbowTrips = require('./controllers/FutureRainbowTrips.ctrl')
var ctrlAdminTrips = require('./controllers/AdminTrips.ctrl')




var ctrlGreenTripSlots = require('./controllers/GreenTripSlots.ctrl')
var ctrlOrangeTripSlots = require('./controllers/OrangeTripSlots.ctrl')
var ctrlPurpleTripSlots = require('./controllers/PurpleTripSlots.ctrl')
var ctrlYellowTripSlots = require('./controllers/YellowTripSlots.ctrl')
var ctrlRainbowTripSlots = require('./controllers/RainbowTripSlots.ctrl')
var ctrlAdminTripSlots = require('./controllers/AdminTripSlots.ctrl')

var ctrlUserTrips = require('./controllers/UserTrips.ctrl')






var router = express.Router();

router                              
    .use('/users', ctrlUsers)
   

    .use('/colors', ctrlColors)
    
    .use('/CurrentGreenTrips', ctrlCurrentGreenTrips)
    .use('/FutureGreenTrips', ctrlFutureGreenTrips)
    .use('/CurrentOrangeTrips', ctrlCurrentOrangeTrips)
    .use('/FutureOrangeTrips', ctrlFutureOrangeTrips)
    .use('/CurrentPurpleTrips', ctrlCurrentPurpleTrips)
    .use('/FuturePurpleTrips', ctrlFuturePurpleTrips)
    .use('/CurrentYellowTrips', ctrlCurrentYellowTrips)
    .use('/FutureYellowTrips', ctrlFutureYellowTrips)
    .use('/CurrentRainbowTrips', ctrlCurrentRainbowTrips)
    .use('/FutureRainbowTrips', ctrlFutureRainbowTrips)
    .use('/AdminTrips', ctrlAdminTrips)
   

    .use('/GreenTripSlots', ctrlGreenTripSlots)
    .use('/OrangeTripSlots', ctrlOrangeTripSlots)
    .use('/PurpleTripSlots', ctrlPurpleTripSlots)
    .use('/YellowTripSlots', ctrlYellowTripSlots)
    .use('/RainbowTripSlots', ctrlRainbowTripSlots)
    .use('/AdminTripSlots', ctrlAdminTripSlots)

    .use('/UserTrips', ctrlUserTrips)

    .use('/AdminUsers', ctrlAdminUsers)

   

module.exports = router;