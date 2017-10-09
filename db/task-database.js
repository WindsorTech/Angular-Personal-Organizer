var mongoose = require("mongoose");

mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  
  todo: {
    type: String,
    trim: true
  },  
  date: {
    type: Date
  },
  completed: {
  	type: Boolean
  }
});

var Todo = mongoose.model('Todo', TaskSchema);

module.exports = Todo;