angular
    .module('todoList.create') // No array, as we are "extending" the module
    .controller('CreateCtrl', CreateCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function CreateCtrl($scope, library, $stateParams) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

    resetView();

    $('.alert-success').hide();
    $('.alert-danger').hide();

    vm.task = {
        taskName: $stateParams.taskName,
        dueDate: $stateParams.dueDate
    }

   function resetView() {
   		vm.task = {
   			taskName: undefined,
   			dueDate: undefined
   		}
   }

   vm.addTask = function() {

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

   $(".close").click(function(){
      $('.alert-success').hide();
      $('.alert-danger').hide();
   });
    
}