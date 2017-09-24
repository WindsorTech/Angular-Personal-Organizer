var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  
  todo: {
    type: String
  },
  
  completeBy: {
    type: Date
  }
});


var Todo = mongoose.model("ToDo", TaskSchema);


module.exports = Todo;