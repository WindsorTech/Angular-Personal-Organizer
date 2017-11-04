angular
    .module('todoList.create') 
    .config(createConfig);

function createConfig($stateProvider) {
    
    $stateProvider.state({
        name: 'create', 
        url: '/create', 
        templateUrl: '/todoList/features/create/create.html', 
        controller: 'CreateCtrl', 
        controllerAs: 'CreateVM' 
    })

}