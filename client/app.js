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
        .when('/adminHome',{
            templateUrl: 'views/adminHome.html',
            controller: 'AdminHomeController'
        })
        .when('/adminAllEvents', {
            templateUrl: 'views/adminAllEvents.html',
            controller: 'AdminHomeController'
        })
         .when('/admin/GreenTrips/:id', {
            templateUrl: 'views/adminTripDetailsGreen.html',
            controller: 'adminGreenTripDetailsController'
        })
        .when('/admin/OrangeTrips/:id', {
            templateUrl: 'views/adminTripDetailsOrange.html',
            controller: 'adminOrangeTripDetailsController'
        })
        .when('/admin/PurpleTrips/:id', {
            templateUrl: 'views/adminTripDetailsPurple.html',
            controller: 'adminPurpleTripDetailsController'
        })
        .when('/admin/YellowTrips/:id', {
            templateUrl: 'views/adminTripDetailsYellow.html',
            controller: 'adminYellowTripDetailsController'
        })
        .when('/admin/slotDetails/:slotID', {
            templateUrl: 'views/adminSlotDetails.html',
            controller: 'adminSlotDetailsController'
        })
        .when('/admin/editTrip/:id',{
            templateUrl: 'views/adminEditTrip.html',
            controller: 'adminEditTripController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);