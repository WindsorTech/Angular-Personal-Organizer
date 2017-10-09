var mongoose = require('mongoose');

//mongoose.Promise = Promise;

mongoose.connect("mongodb://heroku_8mkc7nl7:5j8nnk4ta9lpih6ktmatsg1cqa@ds149144.mlab.com:49144/heroku_8mkc7nl7");

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

module.exports = db;