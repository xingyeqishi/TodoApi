/* jshint node:true */
var express = require('express');
var app = express();

require('./server.js')(app);
app.listen(80);
