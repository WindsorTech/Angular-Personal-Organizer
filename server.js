var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(bodyParser.json());

var mongoose = require('mongoose');

var database = require("./db/tododata.js");


require('./api/get-library')(app);
require('./api/post-library')(app);

app.use(express.static(__dirname + "/app"));


//PORT
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("App running on port:", port);
}); 

// Mongoose Promise
mongoose.Promise = Promise;

// Mongoose Database Config
mongoose.connect("mongodb://heroku_rlc0vsvm:i8vrf1akv1hs3q6eltmqlf2mtb@ds121190.mlab.com:21190/heroku_rlc0vsvm");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes

app.get("/api/todos", function(req, res) {

	TodoSchema.find({}, function(err, data){
        if (err) return handleError(err); 
          	res.json(data);
    });

});

app.put("/api/todo", function(req, res) {

	 ToDo.findByIdAndUpdate(req.body._id, {completed: req.body.completed}, function(err, post){
          if(err) return next(err);
            console.log(post);
            res.send(200);
        });

});

app.post("/api/todo", function(req, res) {

	   var newToDo = new ToDo({
            todo: req.body.todo,
            completeBy: req.body.completeBy
        });

	    newToDo.save(function(err, newTodo){
            if (err) return handleError(err);
            res.send(200);
        });

});