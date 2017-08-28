angular
    .module('todoList.completed') // No array, as we are "extending" the module
    .controller('CompletedCtrl', CompletedCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function CompletedCtrl($scope, $http) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

    
}
