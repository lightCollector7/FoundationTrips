var express = require('express');
var app = express();

var staticServer = express.static('client');

app.use(staticServer);



app.listen(process.env.PORT || 3000);
console.log("server listening on port 3000");