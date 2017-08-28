angular
    .module('todoList', [

        // Global Dependencies
        'ui.router',

        // Features
        'todoList.list',
        'todoList.create',
        'todoList.completed'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {

    // If the URL does not exist as a route, redirect to /
    $urlRouterProvider.otherwise('/');
}
