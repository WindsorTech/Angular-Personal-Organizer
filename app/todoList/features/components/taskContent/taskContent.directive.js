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

	TaskSchema = {};

}