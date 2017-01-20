var express = require('express');
var ctrlColors = require('./controllers/colors.ctrl');
var ctrlUsers = require('./controllers/users.ctrl');

var router = express.Router();

router                              //problem here
    .use('/users', ctrlUsers)
    .use('/colors', ctrlColors);

module.exports = router;