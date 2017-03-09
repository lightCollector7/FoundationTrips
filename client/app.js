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
         .when('/allEvents', {
            templateUrl: 'views/allEvents.html',
            controller: 'allEventsController'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);