angular
    .module('todoList.create') 
    // No array, as we are "extending" the module
    .controller('CreateCtrl', CreateCtrl); 
    // Define our controller (Notice the naming convention - 
    // uppercase first letter, Ctrl suffix)

function CreateCtrl($scope, $http) {
	// vm stands for View Model - anything on "the vm" 
    // is exposed to the view

    // The Controller is the BRAINS of the module
    // before the view renders, the controller is ran
    // this function is ran, so whatever you want to
    // happen before the State shows up, goes in this function
    
    var vm = this; 

    vm.taskName = '';
    vm.dueDate = '';
    vm.opinion = '';

    // watch variable change to display new content on page
    $scope.$watch(function(){
    	return vm.taskName;
    }, function(newValue, oldValue) {
    	if (newValue === 'soccer') {
    		vm.opinion = "INTERESTING";
    	} else if (newValue === 'study') {
    		vm.opinion = "CHALLENGING";
    	} else {
    		vm.opinion = "BORING";
    	}
    })
    
}
