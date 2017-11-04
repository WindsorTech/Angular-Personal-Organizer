// Main module
angular
    .module('todoList', [

        // Global Dependencies
        'ui.router',

        // Features
        'todoList.create',
        'todoList.list',
        'todoList.completed'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {

    // Direct the app the /create state
    $urlRouterProvider.otherwise('/create');
}