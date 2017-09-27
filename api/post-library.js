var library = require('../db/task-database.js');

module.exports = function(app) {
	app.post('/library', function(req, res) {
		library.Todo.push(req.body);
		res.send(library.Todo);
	});
}