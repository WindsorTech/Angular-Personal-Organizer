angular
    .module('todoList.completed') 
    .controller('CompletedCtrl', CompletedCtrl);

function CompletedCtrl($scope, $http) {
    var vm = this; 

    // empty array to be filled with the completed tasks
    vm.tasks = [];

    // Http call to get the completed tasks from database
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