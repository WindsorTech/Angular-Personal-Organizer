angular
    .module('todoList.create') 
    .controller('CreateCtrl', CreateCtrl); 

function CreateCtrl($scope, library, $stateParams) {
    var vm = this;

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