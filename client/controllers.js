angular.module('FoundationTrips.controllers',[])

.controller('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
    UserService.me().then(function(me) {
        redirect();
    });
    function redirect() {
        var dest = $location.search().p;
        if (!dest) {
            dest = '/Events';
        }
        $location.path(dest).search('p', null).replace();
    }
    $scope.login = function() {
        UserService.login($scope.email, $scope.password)
        .then(function() {
            redirect();
        }, function(err) {
            console.log(err);
        });
    }
}])

.controller('EventsController', ['$scope', '$location', '$route', '$http', 'UserService', 'GreenTripsFactory', 'OrangeTripsFactory', 'PurpleTripsFactory', 'YellowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, GreenTripsFactory, OrangeTripsFactory, PurpleTripsFactory, YellowTripsFactory, $routeParams) {
    UserService.requireLogin();
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        console.log($scope.ME);
        $scope.loggedIn = true;
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }
 
    function getGreenTrips() {
        $scope.greenTrips = GreenTripsFactory.query();
        console.log('this is the GREENTRIPS ARRAY: ')
        console.log($scope.greenTrips)
    }
    getGreenTrips();

    function getOrangeTrips() {
       $scope.orangeTrips = OrangeTripsFactory.query();
        console.log('this is the ORANGETRIPS ARRAY: ')
        console.log($scope.orangeTrips)
    }
    getOrangeTrips();

    function getPurpleTrips() {
       $scope.purpleTrips = PurpleTripsFactory.query();
        console.log('this is the PURPLETRIPS ARRAY: ')
        console.log($scope.purpleTrips)
    }
    getPurpleTrips();

    function getYellowTrips() {
       $scope.yellowTrips = YellowTripsFactory.query();
        console.log('this is the YELLOWTRIPS ARRAY: ')
        console.log($scope.yellowTrips)
    }
    getYellowTrips();


//======================================================================================
    // $http({                      MOVE INTO TRIPDETAILS CONTROLLER
    //     method: 'GET',
    //     url: '/api/GreenSlots01'
    // }).then(function(success){
    //     $scope.greenSlots01Array = success.data;
    //     console.log('this is the greenSlots01Array: ');
    //     console.log($scope.greenSlots01Array);
    //     console.log('this is greenSlotsArray01[0]: ')
    //     console.log($scope.greenSlots01Array[0]);
    // }, function(err) {
    //     console.log(err);
    // });

       
    // $scope.signMeUpG1 = function() {
    //     UserService.me().then(function(me) {
    //         $scope.ME = me;
    //         var data = {
    //             firstName: $scope.ME.firstName,
    //             lastName: $scope.ME.lastName,
    //             waitlist: $scope.ME.waitlist,
    //             paid: $scope.ME.paid,
    //             colorID: $scope.ME.colorID,
    //             userID: $scope.ME.id
    //         }

    //         var participantToInsertIntoGreenSlots01 = new ParticipantForEvent(data);
    //         participantToInsertIntoGreenSlots01.$save(function (success) {
    //             console.log('participant signed up successfully');
    //         }, function(err){
    //             console.log(err);
    //             alert('You are already signed up for this trip.');
    //         })
    //     })
    // };
//=================================================================================================================    



   
   


  

}])


.controller('GreenTripDetailsController', ['$scope', '$location', '$route', '$http', 'UserService', '$routeParams', 'GreenTripsFactory', 'GreenTripSlotsFactory', function($scope, $location, $route, $http, UserService, $routeParams, GreenTripsFactory, GreenTripSlotsFactory){
       console.log( "we are in the GreenTripsDetailsController now.")
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }

    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.greenTrip = GreenTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.greenTrip: ");
    console.log($scope.greenTrip);

    $scope.greenTripSlots = GreenTripSlotsFactory.get( {id: tripID} );
    console.log("this is the $scope.greenTripSlots Array: ");
    console.log($scope.greenTripSlots);
}])

.controller('OrangeTripDetailsController', ['$scope', '$location', '$route', '$http', 'UserService', '$routeParams', 'OrangeTripsFactory', function($scope, $location, $route, $http, UserService, $routeParams, OrangeTripsFactory){
       console.log( "we are in the OrangeTripDetailsController now.")
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }

    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.orangeTrip = OrangeTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.orangeTrip: ");
    console.log($scope.orangeTrip);
}])

.controller('PurpleTripDetailsController', ['$scope', '$location', '$route', '$http', 'UserService', '$routeParams', 'PurpleTripsFactory', function($scope, $location, $route, $http, UserService, $routeParams, PurpleTripsFactory){
       console.log( "we are in the GreenTripsDetailsController now.")
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }

    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.purpleTrip = PurpleTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.purpleTrip: ");
    console.log($scope.purpleTrip);
}])

.controller('YellowTripDetailsController', ['$scope', '$location', '$route', '$http', 'UserService', '$routeParams', 'YellowTripsFactory', function($scope, $location, $route, $http, UserService, $routeParams, YellowTripsFactory){
       console.log( "we are in the YellowTripDetailsController now.")
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }

    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.yellowTrip = YellowTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.yellowTrip: ");
    console.log($scope.yellowTrip);
}])

.controller('AdminController', ['$scope', '$location', '$route', '$http', 'UserService', function($scope, $location, $route, $http, UserService) {
    // restrict this page to admin only!!
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }


    $http({
        method: 'GET',
        url: '/api/allGreenEvents'
    }).then(function(success){
        console.log(success.data);
        $scope.greenEventsArray = success.data;
        console.log('this is the greenEventsArray: ');
        console.log($scope.greenEventsArray);
        console.log($scope.GreenEventsArray[0]);
    }, function(err) {
        console.log(err);
    });

     $http({
        method: 'GET',
        url: '/api/allOrangeEvents'
    }).then(function(success){
        console.log(success.data);
        $scope.orangeEventsArray = success.data;
        console.log('this is the orangeEventsArray: ');
        console.log($scope.orangeEventsArray);
        console.log($scope.orangeEventsArray[0]);
    }, function(err) {
        console.log(err);
    });

     $http({
        method: 'GET',
        url: '/api/allPurpleEvents'
    }).then(function(success){
        console.log(success.data);
        $scope.purpleEventsArray = success.data;
        console.log('this is the purpleEventsArray: ');
        console.log($scope.purpleEventsArray);
        console.log($scope.purpleEventsArray[0]);
    }, function(err) {
        console.log(err);
    });

     $http({
        method: 'GET',
        url: '/api/allYellowEvents'
    }).then(function(success){
        console.log(success.data);
        $scope.yellowEventsArray = success.data;
        console.log('this is the yellowEventsArray: ');
        console.log($scope.yellowEventsArray);
        console.log($scope.yellowEventsArray[0]);
    }, function(err) {
        console.log(err);
    });    
}])

.controller('HomeController', ['$scope', function(){

}])
.controller('Green1Controller', ['$scope', function(){

}])