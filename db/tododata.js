var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var TodoSchema = new Schema({
  
  todo: {
    type: String
  },
  
  completeBy: {
    type: Date
  }
});


var Todo = mongoose.model("ToDo", TodoSchema);


module.exports = Todo;
