// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Require Database Files
var db = require('./db/database-connect.js');
var Todo = require('./db/task-database.js');

// This directs Express to the Angular App
app.use(express.static(__dirname + "/app"));



// Require Database Routes Files
var getRoute = require("./api/get-tasks.js")(app);
var postRoute = require("./api/post-tasks.js")(app);
var putRoute = require("./api/update-tasks.js")(app);
var deleteRoute = require("./api/delete-tasks.js")(app);

//SERVER PORT
var port = process.env.port || 3000;
app.listen(port, function() {
    console.log("YES! The App is running on port", port);
}); 