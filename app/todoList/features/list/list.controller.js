angular
    .module('todoList.list') 
    .controller('ListCtrl', ListCtrl); 

function ListCtrl(library) {
    var vm = this; 

    vm.tasks = [];

    library.getTask(vm.tasks);

    console.log(vm.tasks);

    var datetoday = new Date;

    datetoday.setHours(0,0,0,0);

    var datestring = datetoday.toISOString();

    vm.today = datestring;

    console.log(vm.today);

}





