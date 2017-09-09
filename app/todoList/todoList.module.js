// Here we declare the main module (app).
angular
    .module('todoList', [
        // Here we define the modules dependencies and any "global" dependencies
        // Modules that this module depends on will inherit this modules dependencies

        // Global Dependencies
        'ui.router',

        // Features
        'todoList.create',
        'todoList.list',
        'todoList.completed'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    // Here we configure the application

    // If the URL does not exist as a route, redirect to /
    $urlRouterProvider.otherwise('/create');
}
