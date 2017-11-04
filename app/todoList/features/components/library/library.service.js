angular
	.module('todoList.component.library')
	.service('library', LibraryService);

function LibraryService($http) {

	// Function with call to to Add task to the database
	function addTask(taskData) {
		$http({
			method: 'POST',
			url: '/api/todo',
			data: taskData
		}).then(function(response){
	
		});
	}

	// Function with call to get all Tasks the database
	function getTask(taskData) {
		$http({
			method: 'GET',
			url: '/api/todos'
		}).then(function(response){
			response.data.forEach(function(item) {
				taskData.push(item);
			});
		});
	}

	// Function with call to delete tasks from the database
	function deleteTask(taskData){
		$http({
				method: 'DELETE',
				url: '/api/todos/' + taskData
            }).then(function (err, res) {
                if (err) throw err;
            });
	}

	// Function with call to update tasks in the database
	function updateTask(taskData) {
		$http({
				method: 'PUT',
				url: '/api/todo',
				data: taskData
			}).then(function(err, response){
				if (err) throw err;
			});
	}

	// Return object to expose all functions
	return {
		getTask: getTask,
		addTask: addTask,
		deleteTask: deleteTask,
		updateTask: updateTask
	}
}