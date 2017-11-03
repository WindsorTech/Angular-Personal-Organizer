angular
    .module('todoList.list') 
    .controller('ListCtrl', ListCtrl); 

function ListCtrl(library) {
    var vm = this; 

    $('.head').hide();

    vm.tasks = [];

    library.getTask(vm.tasks);

    console.log(vm.tasks);

    var datetoday = new Date;

    datetoday.setHours(0,0,0,0);

    var datestring = datetoday.toISOString();

    vm.today = datestring;

    console.log(vm.today);

    vm.showOverdue = function () {
    	$('.overdue').show();
    }

    vm.showToday = function () {
    	$('.today').show();
    }

    vm.showLater = function () {
    	$('.later').show();
    }

}





