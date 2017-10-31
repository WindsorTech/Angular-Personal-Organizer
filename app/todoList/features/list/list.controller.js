angular
    .module('todoList.list') 
    .controller('ListCtrl', ListCtrl); 

function ListCtrl(library) {
    var vm = this; 

    vm.tasks = [];

    library.getTask(vm.tasks);

}





