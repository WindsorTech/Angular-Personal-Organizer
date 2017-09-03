angular
    .module('todoList', [

        // Global Dependencies
        'ui.router',

        // Features - modules that are dependencies
        'todoList.list',
        'todoList.create',
        'todoList.completed',
        'todoList.story'

    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {

    // If the URL does not exist as a route, redirect to /
    $urlRouterProvider.otherwise('/create');
    // Route of the state where the user lands when visits page
}
