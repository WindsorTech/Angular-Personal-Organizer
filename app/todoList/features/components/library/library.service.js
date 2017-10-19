angular
	.module('todoList.component.library')
	.service('library', LibraryService);


function LibraryService($http) {


	function getTask(taskData) {
		$http({
			method: 'GET',
			url: '/api/todos'
		}).then(function(response){
			response.data.forEach(function(item) {
				taskData.push(item);
			});
			console.log(taskData);
		});
	}

	function addTask(taskData) {
		$http({
			method: 'POST',
			url: '/api/todo',
			data: taskData
		}).then(function(response){
	
		});
	}

	function deleteTask(taskData){
		$http({
				method: 'DELETE',
				url: '/api/todos/' + taskData
            }).then(function (err, res) {
                if (err) throw err;
            })
	}

	return {
		getTask: getTask,
		addTask: addTask,
		deleteTask: deleteTask
	}
}