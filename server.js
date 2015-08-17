//=======================================================
//Project: modular_mongoose_dashboard -- server.js by JM 5.23.15
//=======================================================

//=======================================================
//requires: path, express, bodyParser, mongoose, routes
//=======================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
//=======================================================

//=======================================================
//app setup : set views to ejs, set server, set socket.io
//=======================================================
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
var server = app.listen(3333, function() { console.log("listening on port 3333") });
var io = require('socket.io').listen(server);
//=======================================================