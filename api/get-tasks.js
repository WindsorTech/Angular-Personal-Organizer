var mongoose = require('mongoose');

var db = require('./../db/database-connect.js');
var ToDo = require('./../db/task-database.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {

	app.get('/api/todos', function(req, res){
		console.log(req.body);
		var taskList = ToDo.find({}).sort({'date': 1});
		taskList.exec(function(err, data){
			if (err) throw err;
			res.json(data);
			});
		});

	app.get('/api/todos/:id', function (req, res) {
		var id = req.params.id;
        ToDo.findById(id, function(err, data){
            if (err) throw err;
            res.json(data);
        })
    });
}