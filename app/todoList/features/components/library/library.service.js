angular
	.module('todoList.component.library')
	.service('library', LibraryService);


function LibraryService($http) {

	var tasks = [];

	function getTask(library) {
		$http({
			method: 'GET',
			url: '/api/todos'
		}).then(function(response){
			response.data.forEach(function(item) {
				library.push(item);
			});
		});
	}

	function addTask(taskData) {
		tasks.push(taskData);
		$http({
			method: 'POST',
			url: '/api/todo',
			data: taskData
		}).then(function(response){
	
		});
	}

	return {
		tasks: tasks,
		getTask: getTask,
		addTask: addTask
	}
}