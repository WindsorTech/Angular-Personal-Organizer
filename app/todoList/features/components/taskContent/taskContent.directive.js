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

function TaskContentCtrl($scope, library, $state) {

	var vm = this;

	$scope.edit = false;

	// vm.today = new Date();
	// console.log(vm.today);

	vm.delete = function(){
		var id = vm.taskData._id;
		library.deleteTask(id);
		$scope.erased = true; 
	};

	vm.updateTask = function () {
		var update = {
			_id: vm.taskData._id,
			completed: vm.taskData.completed,
			todo: vm.taskData.todo,
			date: vm.taskData.date
		};
		library.updateTask(update);
	}

	vm.reloadView = function() {
	   $state.reload();
	}

}