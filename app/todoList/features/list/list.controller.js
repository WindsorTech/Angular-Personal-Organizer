angular
    .module('todoList.list') // No array, as we are "extending" the module
    .controller('ListCtrl', ListCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function ListCtrl(library) {
    var vm = this; 

    vm.tasks = library.tasks;

    // vm.tasks = [];

    library.getTask(vm.tasks);

}





