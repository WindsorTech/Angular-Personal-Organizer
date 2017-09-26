var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  
  todo: {
    type: String,
    trim: true
  },
  
  completeBy: {
    type: Date
  }
});


var Todo = mongoose.model("Todo", TaskSchema);


module.exports = Todo;