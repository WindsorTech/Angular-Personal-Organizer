angular
    .module('todoList.list') 
    .controller('ListCtrl', ListCtrl); 

function ListCtrl(library) {
    var vm = this; 

    vm.tasks = [];

    library.getTask(vm.tasks);

    console.log(vm.tasks);

 //    vm.today = new Date().toISOString();
	// console.log(vm.today);

}





