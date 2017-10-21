angular
	.module('todoList.component.taskContent')
	.directive('taskContent', TaskContent);

function TaskContent() {
	return  {
		restrict: 'E',
		scope: {
			taskData: '=' // to be used as task-data
		},
		templateUrl: '/todoList/features/components/taskContent/taskContent.html',
		controller: TaskContentCtrl,
		controllerAs: 'TaskContentVM',
		bindToController: true
	}
}

function TaskContentCtrl($scope, library) {

	var vm = this;

	vm.delete = function(){
		var id = vm.taskData._id;
		library.deleteTask(id);
	};

	vm.updateTask = function(){
		var update = {
			_id: vm.taskData._id,
			completed: vm.taskData.completed
		};
		library.updateTask(update);
	};


}