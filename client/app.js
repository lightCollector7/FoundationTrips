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
         .when('/Events', {
            templateUrl: 'views/allEvents.html',
            controller: 'EventsController'
        })
        .when('/GreenTrips/:id', {
            templateUrl: 'views/TripDetailsGreen.html',
            controller: 'GreenTripDetailsController'
        })
        .when('/OrangeTrips/:id', {
            templateUrl: 'views/TripDetailsOrange.html',
            controller: 'OrangeTripDetailsController'
        })
        .when('/PurpleTrips/:id', {
            templateUrl: 'views/TripDetailsPurple.html',
            controller: 'PurpleTripDetailsController'
        })
        .when('/YellowTrips/:id', {
            templateUrl: 'views/TripDetailsYellow.html',
            controller: 'YellowTripDetailsController'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);