var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var utils = require('./utils');
var configurePassport = require('./config/passport');
var fs = require('fs');
var path = require('path');
var clientPath = path.join(__dirname, '../client');
var api = require('./api');

// var prerender = require('prerender-node');



app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(cookieParser());
configurePassport(app);
app.use('/api', api);
// prerender.set('prerenderToken', process.env.PRERENDER_TOKEN);
// app.use(prerender);

app.get('*', function(req, res, next) {
    if (utils.isAsset(req.url)) {
        return next();
    } else {
        res.sendFile(path.join(clientPath, 'index.html'));
    }
});


app.listen(process.env.PORT || 3306);
console.log("server listening on port 3306");