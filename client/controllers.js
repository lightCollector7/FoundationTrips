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
    $scope.isGreen = false;
    $scope.isOrange = false;
    $scope.isPurple = false;
    $scope.isYellow = false;

    UserService.me().then(function(me){
        $scope.ME = me;
        console.log("this is $scope.ME: " )
        console.log( $scope.ME);
        $scope.loggedIn = true;
        
        $scope.myColor = me.colorID;
         console.log("my colorID: " + $scope.myColor);
        if ($scope.myColor == "1") {
            $scope.isGreen = true; 
            console.log("My color group is Green");  
        }
        if ($scope.myColor == "2"){
            $scope.isOrange = true;
             console.log("My color group is Orange");
        }
        if ($scope.myColor == "3"){
            $scope.isPurple = true;
            console.log("My color group is Purple");
        }
        if ($scope.myColor == "4"){
            $scope.isYellow = true;
            console.log("My color group is Yellow");
        }
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

}])


.controller('GreenTripDetailsController', ['$scope', '$location', '$route', '$http', 'UserService', '$routeParams', 'GreenTripsFactory', 'GreenTripSlotsFactory', 'GreenTripFilledSlotsFactory', function($scope, $location, $route, $http, UserService, $routeParams, GreenTripsFactory, GreenTripSlotsFactory, GreenTripFilledSlotsFactory){
    console.log( "we are in the GreenTripsDetailsController now.")
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;
        
        $scope.myColor = me.colorID;
        console.log($scope.myColor);
        if ($scope.myColor == "1") {
            $scope.isGreen = true; 
            console.log("My color group is Green");  
        }
        if ($scope.myColor == "2"){
            $scope.isOrange = true;
             console.log("My color group is Orange");
        }
        if ($scope.myColor == "3"){
            $scope.isPurple = true;
            console.log("My color group is Purple");
        }
        if ($scope.myColor == "4"){
            $scope.isYellow = true;
            console.log("My color group is Yellow");
        }
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }

    


    var slotToDelete = [];
    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.greenTrip = GreenTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.greenTrip: ");
    console.log($scope.greenTrip);

    $scope.greenTripSlots = GreenTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.greenTripSlots Array: ");
    console.log($scope.greenTripSlots);

    function isSlotMine(i){                                     // get this to work next!
        var ngSlot = document.getElementById('slot'+i);
        console.log(ngSlot);
            $scope.slotIsMe = false;
            if (ngSlot.userID == $scope.ME.id){
                $scope.slotIsMe = true;
            }
    };
  

    for (var i = 0; i < $scope.greenTripSlots.length; i++ ){
        isSlotMine(i);
        console.log('isSlotMine is running');
    }
    

    $scope.signMeUp = function() {
        UserService.me().then(function(me) {
            $scope.ME = me;
            var data = {
                userID: $scope.ME.id,
                eventID: tripID,
                colorID: $scope.ME.colorID,
            }
            console.log(data);

            var userForEvent = new GreenTripSlotsFactory(data);
            userForEvent.$save(function (success) {
                console.log('participant signed up successfully');
                $route.reload();
            }, function(err){
                console.log(err);
                alert('You are already signed up for this trip.');
            })
            
        })
    };


   $scope.removeMe = function() {                                      
        var shouldRemove = confirm('Remove you from this field trip?');
        if (shouldRemove) {
            var data = null;
            UserService.me().then(function(me){
                var data = {userID: me.id, eventID: tripID}
                console.log(data);
                
                return data;
            }).then (function(data){ 
                
               var mySlot = $http.get('/api/GreenTripSlots/' + data.eventID + '/' + data.userID);
               console.log(mySlot);

               return mySlot;
            }).then (function(mySlot) {
                console.log(mySlot);
                var slotToDelete = mySlot.data;
                console.log(slotToDelete);
                console.log(slotToDelete.id)

                return slotToDelete;
            }).then (function(slotToDelete){
                var slotID = slotToDelete.id;
                $http.delete('/api/GreenTripSlots/delete/' + slotID);
                console.log('deleted successfull')     
                $route.reload();
            }).catch(function(error){
                console.log(error);
            })
        }   
    };    

}])

                    

.controller('OrangeTripDetailsController', ['$scope', '$location', '$route', '$http', 'UserService', '$routeParams', 'OrangeTripsFactory', 'OrangeTripSlotsFactory', 'OrangeTripFilledSlotsFactory', function($scope, $location, $route, $http, UserService, $routeParams, OrangeTripsFactory, OrangeTripSlotsFactory, OrangeTripFilledSlotsFactory){
    console.log( "we are in the OrangeTripDetailsController now.")
 
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;

        $scope.myColor = me.colorID;
        console.log($scope.myColor);
        if ($scope.myColor == "1") {
            $scope.isGreen = true; 
            console.log("My color group is Green");  
        }
        if ($scope.myColor == "2"){
            $scope.isOrange = true;
             console.log("My color group is Orange");
        }
        if ($scope.myColor == "3"){
            $scope.isPurple = true;
            console.log("My color group is Purple");
        }
        if ($scope.myColor == "4"){
            $scope.isYellow = true;
            console.log("My color group is Yellow");
        }
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }
    var slotToDelete = [];
    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.orangeTrip = OrangeTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.orangeTrip: ");
    console.log($scope.orangeTrip);

    $scope.orangeTripSlots = OrangeTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.orangeTripSlots Array: ");
    console.log($scope.orangeTripSlots);

    $scope.signMeUp = function() {
        UserService.me().then(function(me) {
            $scope.ME = me;
            var data = {
                userID: $scope.ME.id,
                eventID: tripID,
                colorID: $scope.ME.colorID,
            }
            console.log(data);

            var userForEvent = new OrangeTripSlotsFactory(data);
            userForEvent.$save(function (success) {
                console.log('participant signed up successfully');
                $route.reload();
            }, function(err){
                console.log(err);
                alert('You are already signed up for this trip.');
            })
            
        })
    };


   $scope.removeMe = function() {                                      
        var shouldRemove = confirm('Remove you from this field trip?');
        if (shouldRemove) {
            var data = null;
            UserService.me().then(function(me){
                var data = {userID: me.id, eventID: tripID}
                console.log(data);
                
                return data;
            }).then (function(data){ 
                
               var mySlot = $http.get('/api/OrangeTripSlots/' + data.eventID + '/' + data.userID);
               console.log(mySlot);

               return mySlot;
            }).then (function(mySlot) {
                console.log(mySlot);
                var slotToDelete = mySlot.data;
                console.log(slotToDelete);
                console.log(slotToDelete.id)

                return slotToDelete;
            }).then (function(slotToDelete){
                var slotID = slotToDelete.id;
                $http.delete('/api/OrangeTripSlots/delete/' + slotID);
                console.log('deleted successfull')     
                $route.reload();
            }).catch(function(error){
                console.log(error);
            })
        }   
    }; 
}])

.controller('PurpleTripDetailsController', ['$scope', '$location', '$route', '$http', 'UserService', '$routeParams', 'PurpleTripsFactory', 'PurpleTripSlotsFactory', 'PurpleTripFilledSlotsFactory', function($scope, $location, $route, $http, UserService, $routeParams, PurpleTripsFactory, PurpleTripSlotsFactory, PurpleTripFilledSlotsFactory){
    console.log( "we are in the PurpleTripDetailsController now.")
 
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;

        $scope.myColor = me.colorID;
        console.log($scope.myColor);
        if ($scope.myColor == "1") {
            $scope.isGreen = true; 
            console.log("My color group is Green");  
        }
        if ($scope.myColor == "2"){
            $scope.isOrange = true;
             console.log("My color group is Orange");
        }
        if ($scope.myColor == "3"){
            $scope.isPurple = true;
            console.log("My color group is Purple");
        }
        if ($scope.myColor == "4"){
            $scope.isYellow = true;
            console.log("My color group is Yellow");
        }
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }
    var slotToDelete = [];
    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.purpleTrip = PurpleTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.purpleTrip: ");
    console.log($scope.purpleTrip);

    $scope.purpleTripSlots = PurpleTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.purpleTripSlots Array: ");
    console.log($scope.purpleTripSlots);

    $scope.signMeUp = function() {
        UserService.me().then(function(me) {
            $scope.ME = me;
            var data = {
                userID: $scope.ME.id,
                eventID: tripID,
                colorID: $scope.ME.colorID,
            }
            console.log(data);

            var userForEvent = new PurpleTripSlotsFactory(data);
            userForEvent.$save(function (success) {
                console.log('participant signed up successfully');
                $route.reload();
            }, function(err){
                console.log(err);
                alert('You are already signed up for this trip.');
            })
            
        })
    };


   $scope.removeMe = function() {                                      
        var shouldRemove = confirm('Remove you from this field trip?');
        if (shouldRemove) {
            var data = null;
            UserService.me().then(function(me){
                var data = {userID: me.id, eventID: tripID}
                console.log(data);
                
                return data;
            }).then (function(data){ 
                
               var mySlot = $http.get('/api/PurpleTripSlots/' + data.eventID + '/' + data.userID);
               console.log(mySlot);

               return mySlot;
            }).then (function(mySlot) {
                console.log(mySlot);
                var slotToDelete = mySlot.data;
                console.log(slotToDelete);
                console.log(slotToDelete.id)

                return slotToDelete;
            }).then (function(slotToDelete){
                var slotID = slotToDelete.id;
                $http.delete('/api/PurpleTripSlots/delete/' + slotID);
                console.log('deleted successfull')     
                $route.reload();
            }).catch(function(error){
                console.log(error);
            })
        }   
    }; 
}])

.controller('YellowTripDetailsController', ['$scope', '$location', '$route', '$http', 'UserService', '$routeParams', 'YellowTripsFactory', 'YellowTripSlotsFactory', 'YellowTripFilledSlotsFactory', function($scope, $location, $route, $http, UserService, $routeParams, YellowTripsFactory, YellowTripSlotsFactory, YellowTripFilledSlotsFactory){
    console.log( "we are in the YellowTripDetailsController now.")
 
    UserService.isLoggedIn();
    $scope.loggedIn = false;
    $scope.isGreen = false;
    $scope.isOrange = false;
    $scope.isPurple = false;
    $scope.isYellow = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;

        $scope.myColor = me.colorID;
        console.log($scope.myColor);
        if ($scope.myColor == "1") {
            $scope.isGreen = true; 
            console.log("My color group is Green");  
        }
        if ($scope.myColor == "2"){
            $scope.isOrange = true;
             console.log("My color group is Orange");
        }
        if ($scope.myColor == "3"){
            $scope.isPurple = true;
            console.log("My color group is Purple");
        }
        if ($scope.myColor == "4"){
            $scope.isYellow = true;
            console.log("My color group is Yellow");
        }
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }
    var slotToDelete = [];
    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.yellowTrip = YellowTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.yellowTrip: ");
    console.log($scope.yellowTrip);

    $scope.yellowTripSlots = YellowTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.yellowTripSlots Array: ");
    console.log($scope.yellowTripSlots);

    $scope.signMeUp = function() {
        UserService.me().then(function(me) {
            $scope.ME = me;
            var data = {
                userID: $scope.ME.id,
                eventID: tripID,
                colorID: $scope.ME.colorID,
            }
            console.log(data);

            var userForEvent = new YellowTripSlotsFactory(data);
            userForEvent.$save(function (success) {
                console.log('participant signed up successfully');
                $route.reload();
            }, function(err){
                console.log(err);
                alert('You are already signed up for this trip.');
            })
            
        })
    };


   $scope.removeMe = function() {                                      
        var shouldRemove = confirm('Remove you from this field trip?');
        if (shouldRemove) {
            var data = null;
            UserService.me().then(function(me){
                var data = {userID: me.id, eventID: tripID}
                console.log(data);
                
                return data;
            }).then (function(data){ 
                
               var mySlot = $http.get('/api/YellowTripSlots/' + data.eventID + '/' + data.userID);
               console.log(mySlot);

               return mySlot;
            }).then (function(mySlot) {
                console.log(mySlot);
                var slotToDelete = mySlot.data;
                console.log(slotToDelete);
                console.log(slotToDelete.id)

                return slotToDelete;
            }).then (function(slotToDelete){
                var slotID = slotToDelete.id;
                $http.delete('/api/YellowTripSlots/delete/' + slotID);
                console.log('deleted successfull')     
                $route.reload();
            }).catch(function(error){
                console.log(error);
            })
        }   
    }; 
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