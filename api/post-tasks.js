// Require Mongoose
var mongoose = require('mongoose');

// Require Database files
var db = require('./../db/database-connect.js');
var ToDo = require('./../db/task-database.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

// Function to Add new items to database
module.exports = function(app) {
	 app.post('/api/todo', function(req, res) {
	 	var newTask = new ToDo ({
	 		todo: req.body.taskName,
	 		date: req.body.dueDate,
	 		completed: false
	 	})

	 	newTask.save(function(err, doc){
	 		if (err) throw err
	 	})
	 })
}