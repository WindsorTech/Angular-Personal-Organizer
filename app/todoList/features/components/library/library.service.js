angular
	.module('todoList.component.library')
	.service('library', LibraryService);


function LibraryService() {

	var tasks = [];

	//  var tasks = [
	//  	{
	// 		taskName: 'Karate',
	// 		dueDate: '08/08/2008'
	// 	},
	// 	{
	// 		taskName: 'Eat Pussy',
	// 		dueDate: '11/11/2011'
	// 	},
	// 	{
	// 		taskName: 'Go to the Gym',
	// 		dueDate: 'NOW!!'
	// 	}

	// ]

	function addTask(taskData) {
		tasks.push(taskData);
	}

	return {
		tasks: tasks,
		addTask: addTask
	}
}