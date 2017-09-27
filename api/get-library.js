var library = require('../db/task-database.js');

module.exports = function(app) {
	app.get('/library', function(req, res) {
		res.send(library.Todo);
	});
}