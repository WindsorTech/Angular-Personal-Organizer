var mongoose = require('mongoose');

var db = require('./../db/database-connect.js');
var ToDo = require('./../db/task-database.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
app.put('/api/todo', function(req, res){

        ToDo.findByIdAndUpdate(req.body._id, {completed: req.body.completed, todo: req.body.todo, date: req.body.date}, function(err, post){
            if(err) return next(err);
            console.log(post);
            res.sendStatus(200);
        });
    });
}