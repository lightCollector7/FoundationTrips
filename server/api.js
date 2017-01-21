var express = require('express');
var ctrlColors = require('./controllers/colors.ctrl');
var ctrlUsers = require('./controllers/users.ctrl');
var ctrlGreen1= require('./controllers/Green1.ctrl');
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
    .use('/Green1', ctrlGreen1)
    .use('/Green1Slots', ctrlGreen1Slots)
    // .use('/Green2', ctrlGreen2)
    // .use('/Green2Slots', ctrlGreen2Slots)
    // .use('/Orange1', ctrlOrange1)
    // .use('/Orange1Slots', ctrlOrange1Slots)
    // .use('/Orange2', ctrlOrange2)
    // .use('/Orange2Slots', ctrlOrange2Slots)

module.exports = router;