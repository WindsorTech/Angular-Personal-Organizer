angular
    .module('todoList.create') 
    .controller('CreateCtrl', CreateCtrl); 

function CreateCtrl($scope, library, $stateParams) {
    var vm = this;

    // Clear fields when task is submitted
    resetView();

    // Hide task submit alerts
    $('.alert-success').hide();
    $('.alert-danger').hide();

    // Get task info from input fields
    vm.task = {
        taskName: $stateParams.taskName,
        dueDate: $stateParams.dueDate
    }

    // Function to clear input fields
    function resetView() {
   		vm.task = {
   			taskName: undefined,
   			dueDate: undefined
   		}
    }

    // Function to Add tasks into database
    vm.addTask = function() {

     // Save task if valid info is entered, otherwise display error alert
     if (vm.task.taskName !== undefined && vm.task.dueDate !== undefined) {
      $('.alert-success').show();
      $('.alert-danger').hide();
      library.addTask(vm.task);
      resetView();
     } else {
      $('.alert-danger').show();
      $('.alert-success').hide();
      resetView();
     }

    }

    // Close the alerts when 'X' is clicked
    $(".close").click(function(){
      $('.alert-success').hide();
      $('.alert-danger').hide();
    });
    
}