"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 8080;
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.listen(port, function () { return console.log("Server started listening to port " + port); });
