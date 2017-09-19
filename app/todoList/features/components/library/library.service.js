angular
	.module('todoList.component.library')
	.service('library', LibraryService);


function LibraryService() {

	var tasks = [];

	function addTask(taskData) {
		tasks.push(taskData);
	}

	return {
		tasks: tasks,
		addTask: addTask
	}
}