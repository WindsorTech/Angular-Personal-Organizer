angular
    .module('todoList.list')
    .config(listConfig);

function listConfig($stateProvider) {

    $stateProvider.state({
        name: 'list', 
        url: '/list', 
        templateUrl: '/todoList/features/list/list.html', 
        controller: 'ListCtrl', 
        controllerAs: 'ListVM' 
    })

}