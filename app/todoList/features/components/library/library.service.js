angular
	.module('todoList.component.library')
	.service('library', LibraryService);


function LibraryService($http) {

	var tasks = [];

	$http({
		method: 'GET',
		url: '/api/todos'
	}).then(function(response){
		response.data.forEach(function(item) {
			tasks.push(item);
		});
	});

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
		addTask: addTask
	}
}