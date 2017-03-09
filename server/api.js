var express = require('express');
var ctrlColors = require('./controllers/colors.ctrl');
var ctrlUsers = require('./controllers/users.ctrl');
var ctrlAllEvents = require('./controllers/allEvents.ctrl');
var ctrlAllGreenEvents = require('./controllers/allGreenEvents.ctrl')
var ctrlAllOrangeEvents = require('./controllers/allOrangeEvents.ctrl')
var ctrlAllPurpleEvents = require('./controllers/allPurpleEvents.ctrl')
var ctrlAllYellowEvents = require('./controllers/allYellowEvents.ctrl')
var ctrlGreen01= require('./controllers/Green01.ctrl');
var ctrlGreen1Slots = require('./controllers/Green1Slots.ctrl');
// var ctrlGreen2 = require('./controllers/Green2.ctrl');
// var ctrlGreen2Slots = require('./controllers/Green2Slots.ctrl');
// var ctrlOrange1= require('./controllers/Orange1.ctrl');
// var ctrlOrange1Slots = require('./controllers/Orange1Slots.ctrl');
// var ctrlOrange2 = require('./controllers/Orange2.ctrl');
// var ctrlOrange2Slots = require('./controllers/Orange2Slots.ctrl');

var router = express.Router();

router                              
    .use('/users', ctrlUsers)
    .use('/colors', ctrlColors)
    .use('/allEvents', ctrlAllEvents)
    .use('/allGreenEvents', ctrlAllGreenEvents)
    .use('/allOrangeEvents', ctrlAllOrangeEvents)
    .use('/allPurpleEvents', ctrlAllPurpleEvents)
    .use('/allYellowEvents', ctrlAllYellowEvents)
    .use('/Green01', ctrlGreen01)
    .use('/Green1Slots', ctrlGreen1Slots)
    // .use('/Green2', ctrlGreen2)
    // .use('/Green2Slots', ctrlGreen2Slots)
    // .use('/Orange1', ctrlOrange1)
    // .use('/Orange1Slots', ctrlOrange1Slots)
    // .use('/Orange2', ctrlOrange2)
    // .use('/Orange2Slots', ctrlOrange2Slots)

module.exports = router;