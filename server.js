// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Require Database Files
var db = require('./db/database-connect.js');
var Todo = require('./db/task-database.js');

// This directs Express to the Angular App
app.use(express.static(__dirname + "/app"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// Require Database Routes Files
var getRoute = require("./api/get-tasks.js")(app);
var postRoute = require("./api/post-tasks.js")(app);
var putRoute = require("./api/update-tasks.js")(app);
var deleteRoute = require("./api/delete-tasks.js")(app);

//SERVER PORT
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("App running on port:", port);
}); 