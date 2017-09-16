angular
	.module('todoList.component.taskContent')
	.directive('taskContent', TaskContent);

function TaskContent() {
	return  {
		restrict: 'E',
		scope: {
			taskData: '='
		},
		templateUrl: '/todoList/features/components/taskContent/taskContent.html',
		controller: TaskContentCtrl,
		controllerAs: 'TaskContentVM',
		bindToController: true
	}
}

function TaskContentCtrl($stateParams) {

		var vm = this;

		vm.task = {
        	taskName: $stateParams.taskName,
        	dueDate: $stateParams.dueDate
    	};

	    // vm.task = {
     //        taskName: 'Comer Buceta',
     //        dueDate: '05/05/2005'
     //    };
	
}