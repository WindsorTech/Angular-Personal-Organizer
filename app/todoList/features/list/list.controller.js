angular
    .module('todoList.list') 
    .controller('ListCtrl', ListCtrl); 

function ListCtrl(library) {

    var vm = this; 

    // Hide all section headers
    $('.head').hide();

    // Create empty array and fill with tasks from database
    vm.tasks = [];
    library.getTask(vm.tasks);
    console.log(vm.tasks);

    // Get today's date, set time to zero and
    // convert it into a ISO String for comparison
    var datetoday = new Date;
    datetoday.setHours(0,0,0,0);
    var datestring = datetoday.toISOString();
    vm.today = datestring;
    console.log(vm.today);

    // Functions to show section headers accordingly
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