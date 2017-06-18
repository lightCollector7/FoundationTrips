
angular.module('FoundationTrips', ['ngRoute', 'ngResource', 'FoundationTrips.controllers', 'FoundationTrips.services', 'FoundationTrips.factories'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: ''
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/logout', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/UserHomeMenu', {
            templateUrl: 'views/UserHomeMenu.html',
            controller: 'UserHomeMenuController'
        })
         .when('/CurrentEvents', {
            templateUrl: 'views/allCurrentEvents.html',
            controller: 'allCurrentEventsController'
        })
        .when('/FutureEvents', {
            templateUrl: 'views/allFutureEvents.html',
            controller: 'allFutureEventsController'
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
        .when('/adminHome', {
            templateUrl: 'views/adminHome.html',
            controller: 'AdminHomeController'
        })
        .when('/adminEventsNavMenu',{
            templateUrl: 'views/adminEventsNavMenu.html',
            controller: ''
        })
        .when('/adminCurrentEvents', {
            templateUrl: 'views/adminCurrentEvents.html',
            controller: 'AdminCurrentEventsController'
        })
        .when('/adminFutureEvents', {
            templateUrl: 'views/adminFutureEvents.html',
            controller: 'AdminFutureEventsController'
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
        .when('/admin/addTripGreen', {
            templateUrl: 'views/adminAddTripGreen.html',
            controller:'adminAddTripController'
        })
        .when('/admin/addTripOrange', {
            templateUrl: 'views/adminAddTripOrange.html',
            controller:'adminAddTripController'
        })
        .when('/admin/addTripPurple', {
            templateUrl: 'views/adminAddTripPurple.html',
            controller:'adminAddTripController'
        })
        .when('/admin/addTripYellow', {
            templateUrl: 'views/adminAddTripYellow.html',
            controller:'adminAddTripController'
        })
        .when('/adminAllUsers', {
            templateUrl: 'views/adminAllUsers.html',
            controller: 'adminUsersController'
        })
        .when('/admin/addUserGreen', {
            templateUrl: 'views/adminAddUserGreen.html',
            controller: 'adminUsersController'
        })
        .when('/admin/addUserOrange', {
            templateUrl: 'views/adminAddUserOrange.html',
            controller: 'adminUsersController'
        })
        .when('/admin/addUserPurple', {
            templateUrl: 'views/adminAddUserPurple.html',
            controller: 'adminUsersController'
        })
        .when('/admin/addUserYellow', {
            templateUrl: 'views/adminAddUserYellow.html',
            controller: 'adminUsersController'
        })
        .when('/admin/editUser/:id', {
            templateUrl: 'views/adminEditUser.html',
            controller: 'adminEditUserController'
        })
        // .when('/adminDeleteAllTrips', {
        //     templateUrl: 'views/adminDeleteAllTrips.html',
        //     controller: 'adminHomeController'
        // })
        .otherwise({
            redirectTo: '/'
        });
}]);