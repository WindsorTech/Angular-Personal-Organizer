angular
    .module('todoList.completed') // No array, as we are "extending" the module
    .controller('CompletedCtrl', CompletedCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function CompletedCtrl($scope, $http) {
    var vm = this; 

    vm.tasks = [];

    $http({
        method: 'GET',
        url: '/api/todos'
    }).then(function(response){
        //for each todo push into the todoData aray
        response.data.forEach(function(item){
            vm.tasks.push(item);
        });
    });

}
