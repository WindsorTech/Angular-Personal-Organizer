var mongoose = require('mongoose');


var Todo = require('./../db/task-database.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	 app.post('/api/table', function(req, res) {
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