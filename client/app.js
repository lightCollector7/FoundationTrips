angular.module('FoundationTrips', ['ngRoute', 'ngResource', 'FoundationTrips.controllers', 'FoundationTrips.services', 'FoundationTrips.factories'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/logout', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/green1', {
            templateUrl: 'views/green1.html',
            controller: 'views/Green1Controller'
        })
         .when('/green2', {
            templateUrl: 'views/green2.html',
            controller: 'views/Green2Controller'
        })
         .when('/orange1', {
            templateUrl: 'views/orange1.html',
            controller: 'views/orange1Controller'
        })
         .when('/orange2', {
            templateUrl: 'views/orange2.html',
            controller: 'views/orange2Controller'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);