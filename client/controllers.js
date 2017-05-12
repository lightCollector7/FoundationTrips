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
         if ($scope.myColor == "0") {
             $scope.isTheRainbow = true;
             console.log("My color group is Rainbow");
         }
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


.controller('GreenTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'GreenTripsFactory', 'GreenTripSlotsFactory', 'GreenTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, GreenTripsFactory, GreenTripSlotsFactory, GreenTripFilledSlotsFactory){
    $window.scrollTo(0, 0);
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

    


    
    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.greenTrip = GreenTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.greenTrip: ");
    console.log($scope.greenTrip);




    $scope.greenTripSlots = [];
    $scope.greenTripSlots = $http.get('/api/GreenTripSlots/' + tripID).then(function(success){
        $scope.greenTripSlots = success.data;
        console.log("this is the $scope.greenTripSlots Array: ");
        console.log($scope.greenTripSlots);
        var tripSlotsArray = $scope.greenTripSlots;
        return tripSlotsArray;
    }).then(function(tripSlotsArray){
        for (var i=0; i<tripSlotsArray.length; i++ ){
            var ngSlot = $scope.greenTripSlots[i];
            console.log(ngSlot);
            $scope.slotIsMine = false;
            if(ngSlot.userID == $scope.ME.id){       //faulty logic to hide names with ng-show="slotisMine" and ng-hide="slotisMine"
                $scope.slotIsMine = true;
                
                console.log('values to compare: ')
                console.log("ngSlot.userID: " + ngSlot.userID);
                console.log("$scope.ME.id: " + $scope.ME.id);
                console.log("if both are equal than slotIsMine = true")
                console.log($scope.slotIsMine);
                }
            }
        });
    
    

    // $scope.greenTripSlots = GreenTripSlotsFactory.query( {id: tripID} ).then(function(){
    //     function isSlotMine(i){                                     // get this to work next!
    //     var ngSlot = document.getElementById('slot'+i);
    //     console.log(ngSlot);
    //         $scope.slotIsMe = false;
    //         if (ngSlot.userID == $scope.ME.id){
    //             $scope.slotIsMe = true;
    //         }
    //     };
  

    //     for (var i = 0; i < $scope.greenTripSlots.length; i++ ){
    //         isSlotMine(i);
    //         console.log('isSlotMine is running');
    //     }
    // });


   
    

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

   var slotToDelete = []; 
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

                    

.controller('OrangeTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'OrangeTripsFactory', 'OrangeTripSlotsFactory', 'OrangeTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, OrangeTripsFactory, OrangeTripSlotsFactory, OrangeTripFilledSlotsFactory){
    console.log( "we are in the OrangeTripDetailsController now.")
    $window.scrollTo(0, 0);
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

.controller('PurpleTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'PurpleTripsFactory', 'PurpleTripSlotsFactory', 'PurpleTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, PurpleTripsFactory, PurpleTripSlotsFactory, PurpleTripFilledSlotsFactory){
    console.log( "we are in the PurpleTripDetailsController now.")
    $window.scrollTo(0, 0);
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

.controller('YellowTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'YellowTripsFactory', 'YellowTripSlotsFactory', 'YellowTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, YellowTripsFactory, YellowTripSlotsFactory, YellowTripFilledSlotsFactory){
    console.log( "we are in the YellowTripDetailsController now.")
    $window.scrollTo(0, 0);
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

.controller('AdminHomeController', ['$scope', '$location', '$route', '$http', 'UserService', 'GreenTripsFactory', 'OrangeTripsFactory', 'PurpleTripsFactory', 'YellowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, GreenTripsFactory, OrangeTripsFactory, PurpleTripsFactory, YellowTripsFactory, $routeParams) {
    //restrict to admins only

    UserService.me().then(function(me){
        $scope.ME = me;
        console.log("this is $scope.ME: " )
        console.log( $scope.ME);
        $scope.loggedIn = true;
        
    });
    $scope.logout = function () {
        UserService.logout().then(function(){
        $route.reload();
        });
    }

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();


 
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


.controller('adminGreenTripDetailsController', ['$scope', '$location', '$route', '$http', "$window", 'UserService', '$routeParams', 'GreenTripsFactory', 'GreenTripSlotsFactory', 'GreenTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, GreenTripsFactory, GreenTripSlotsFactory, GreenTripFilledSlotsFactory){
    console.log( "we are in the GreenTripsDetailsController now.")
    //require admin
    $window.scrollTo(0, 0);
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

    var tripID = $routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.greenTrip = GreenTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.greenTrip: ");
    console.log($scope.greenTrip);

    $scope.greenTripSlots = $http.get('/api/GreenTripSlots/' + tripID).then(function(success){
        $scope.greenTripSlots = success.data;
        console.log($scope.greenTripSlots);
    })
      

}])

                    

.controller('adminOrangeTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'OrangeTripsFactory', 'OrangeTripSlotsFactory', 'OrangeTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, OrangeTripsFactory, OrangeTripSlotsFactory, OrangeTripFilledSlotsFactory){
    console.log( "we are in the OrangeTripDetailsController now.")
    //require admin
    $window.scrollTo(0, 0);
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

.controller('adminPurpleTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'PurpleTripsFactory', 'PurpleTripSlotsFactory', 'PurpleTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, PurpleTripsFactory, PurpleTripSlotsFactory, PurpleTripFilledSlotsFactory){
    console.log( "we are in the PurpleTripDetailsController now.")
    //require admin
    $window.scrollTo(0, 0);
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

.controller('adminYellowTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'YellowTripsFactory', 'YellowTripSlotsFactory', 'YellowTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, YellowTripsFactory, YellowTripSlotsFactory, YellowTripFilledSlotsFactory){
    console.log( "we are in the YellowTripDetailsController now.")
    //require admin
    $window.scrollTo(0, 0);
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
}])

.controller('adminSlotDetailsController', ['$scope', '$location', '$route', '$http', 'UserService', '$routeParams', 'UpdateSlotFactory', function($scope, $location, $route, $http, UserService, $routeParams, UpdateSlotFactory){
//require admin



            var slotID = $routeParams.slotID;
            console.log(slotID); // WHY IS THIS NOT WORKING?

            // $scope.slotToEdit = $http.get('/api/AdminTripSlots/slot/' + slotID).then(function(success){
            $scope.slotToEdit= UpdateSlotFactory.get({id: slotID}), function(){
                $scope.slotToEdit.paid = String($scope.slotToEdit.paid);

                $scope.slotToEdit = success.data;
                
                var slotToEdit = $scope.slotToEdit;
                console.log('slot to edit:');
                console.log( $scope.slotToEdit);
                console.log('slotToEdit.paid: ' + $scope.slotToEdit.paid)
                return slotToEdit
            };


            $scope.updateThisSlot = function () {
                console.log($scope.slotToEdit.paid);
                console.log('this is the color');
                console.log($scope.slotToEdit.Colors);
                $scope.slotToEdit.$update(function (success) {
                    console.log($scope.slotToEdit.paid);
                    console.log($scope.slotToEdit.Colors);
                    console.log($scope.slotToEdit.eventID);
                    console.log('The slot was updated!');
                    $location.path('/admin/' + $scope.slotToEdit.Colors + 'Trips/' + $scope.slotToEdit.eventID);  
                });
            };

            $scope.promptDeleteThisSlot = function () {
            var shouldDelete = confirm('Are you sure you want to delete this slot?');
            if (shouldDelete) {
                console.log($scope.slotToEdit);

                

                $scope.slotToEdit.$delete(function (success) {
                    $location.path('/admin/' + $scope.slotToEdit.Colors + 'Trips/' + $scope.slotToEdit.eventID);
                });
            }
        }



}])

.controller('adminEditTripController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'AdminTripFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, AdminTripFactory){
    UserService.isLoggedIn();
    UserService.isAdmin();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;
    });
    $scope.logout = function() {
         UserService.logout().then(function(){
        $route.reload();
        });
    }

    var tripID = $routeParams.id;
    $scope.tripToEdit = AdminTripFactory.get( {id: tripID} );
    console.log("this is the $scope.tripToEdit: ");
    console.log($scope.tripToEdit);

    $scope.updateTrip = function() {
        $scope.tripToEdit.$update(function(success) {
            console.log('the trip was updated!');
            $route.reload();
            // $location.path('/adminAllEvents');
        });
    };

    $scope.promptDeleteThisTrip = function () {
        var shouldDelete = confirm('Are you sure you want to delete this trip?');
        if (shouldDelete) {
            console.log($scope.tripToEdit);

            $scope.tripToEdit.$delete(function (success) {
                $location.path('/adminAllEvents');
            });
        };
    };

}])

.controller('HomeController', ['$scope', function(){

}])
.controller('Green1Controller', ['$scope', function(){

}])