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

    vm.books = [ 
		{
		taskName: 'Coding',
    	dueDate: '05/05/2005',
    	opinion: 'Relaxing'
		},

		{
		taskName: 'Lekson',
    	dueDate: '09/09/2009',
    	opinion: 'Wonderful'
		} 
    ];

    // vm.taskName = '';
    // vm.dueDate = '';
    // vm.opinion = '';

    // watch variable change to display new content on page

    // $scope.$watch(function(){
    // 	return vm.taskName;
    // }, function(newValue, oldValue) {
    // 	if (newValue === 'soccer') {
    // 		vm.opinion = "INTERESTING";
    // 	} else if (newValue === 'study') {
    // 		vm.opinion = "CHALLENGING";
    // 	} else {
    // 		vm.opinion = "BORING";
    // 	}
    // })

    // API call to get user data from a third party site

    // $http({
    // 	method: 'GET',
    // 	url: 'https://randomuser.me/api'
    // }).then(function(response){
    // 	console.log(response);
    // 	vm.taskName = response.data.results[0].name.first;
    // 	vm.dueDate = response.data.results[0].registered;
    // })
    
}
