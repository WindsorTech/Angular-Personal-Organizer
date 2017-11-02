angular
    .module('todoList.list') 
    .controller('ListCtrl', ListCtrl); 

function ListCtrl(library) {
    var vm = this; 

    vm.tasks = [];

    library.getTask(vm.tasks);

    console.log(vm.tasks);

 	//vm.today = new Date();

 	//vm.today.setHours(0,0,0,0);

 	// vm.today.toISOString();

	//console.log(vm.today);

}





