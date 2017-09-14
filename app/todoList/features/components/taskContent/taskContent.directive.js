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

function TaskContentCtrl() {
	
}