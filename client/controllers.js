angular.module('FoundationTrips.controllers',[])

.controller('LoginController', ['$scope', '$location', '$window', 'UserService', function($scope, $location, $window, UserService) {
    
    $window.scrollTo(0, 0);

    UserService.me().then(function(me) {
        redirect();
    });
    function redirect() {
        var dest = $location.search().p;
        if (!dest) {
            dest = '/UserHomeMenu';
        }
        $location.path(dest).search('p', null).replace();
    }
    $scope.login = function() {
        UserService.login($scope.email, $scope.password)
        .then(function() {
            redirect();
        }, function(err) {
            console.log(err);
            alert("an error occurred during login attempt")
        });
    }
}])

.controller('UserHomeMenuController', ['$scope', '$location', 'UserService', '$route', function($scope, $location, UserService, $route) {
    UserService.requireLogin();
    UserService.isLoggedIn();

    $scope.loggedIn = false;
    $scope.isAdmin = false;
    $scope.isGreen = false;
    $scope.isOrange = false;
    $scope.isPurple = false;
    $scope.isYellow = false;

    UserService.me().then(function(me){
        $scope.ME = me;
        console.log("this is $scope.ME: " )
        console.log( $scope.ME);
        $scope.loggedIn = true;

        $scope.myRole = me.role;
        console.log("my role: " + $scope.myRole);
        if($scope.myRole == "admin") {
            $scope.isAdmin = true;
        }
        
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
}])

.controller('allCurrentEventsController', ['$scope', '$location', '$route', '$http', 'UserService', 'CurrentGreenTripsFactory', 'CurrentOrangeTripsFactory', 'CurrentPurpleTripsFactory', 'CurrentYellowTripsFactory', 'CurrentRainbowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, CurrentGreenTripsFactory, CurrentOrangeTripsFactory, CurrentPurpleTripsFactory, CurrentYellowTripsFactory, CurrentRainbowTripsFactory, $routeParams) {
    UserService.requireLogin();
    UserService.isLoggedIn();

    $scope.loggedIn = false;
    $scope.isAdmin = false;
    $scope.isGreen = false;
    $scope.isOrange = false;
    $scope.isPurple = false;
    $scope.isYellow = false;

    UserService.me().then(function(me){
        $scope.ME = me;
        console.log("this is $scope.ME: " )
        console.log( $scope.ME);
        $scope.loggedIn = true;

        $scope.myRole = me.role;
        console.log("my role: " + $scope.myRole);
        if($scope.myRole == "admin") {
            $scope.isAdmin = true;
        }
        
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
        $scope.greenTrips = CurrentGreenTripsFactory.query();
        console.log('this is the GREENTRIPS ARRAY: ')
        console.log($scope.greenTrips)
    }
    getGreenTrips();

    function getOrangeTrips() {
       $scope.orangeTrips = CurrentOrangeTripsFactory.query();
        console.log('this is the ORANGETRIPS ARRAY: ')
        console.log($scope.orangeTrips)
    }
    getOrangeTrips();

    function getPurpleTrips() {
       $scope.purpleTrips = CurrentPurpleTripsFactory.query();
        console.log('this is the PURPLETRIPS ARRAY: ')
        console.log($scope.purpleTrips)
    }
    getPurpleTrips();

    function getYellowTrips() {
       $scope.yellowTrips = CurrentYellowTripsFactory.query();
        console.log('this is the YELLOWTRIPS ARRAY: ')
        console.log($scope.yellowTrips)
    }
    getYellowTrips();

    function getRainbowTrips(){
        $scope.rainbowTrips = CurrentRainbowTripsFactory.query();
        console.log('this is the RAINBOWTRIPS ARRAY: ')
        console.log($scope.rainbowTrips);
    }
    getRainbowTrips();

}])

.controller('allFutureEventsController', ['$scope', '$location', '$route', '$http', 'UserService', 'FutureGreenTripsFactory', 'FutureOrangeTripsFactory', 'FuturePurpleTripsFactory', 'FutureYellowTripsFactory', 'FutureRainbowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, FutureGreenTripsFactory, FutureOrangeTripsFactory, FuturePurpleTripsFactory, FutureYellowTripsFactory, FutureRainbowTripsFactory, $routeParams) {
    UserService.requireLogin();
    UserService.isLoggedIn();

    $scope.loggedIn = false;
    $scope.isAdmin = false;
    $scope.isGreen = false;
    $scope.isOrange = false;
    $scope.isPurple = false;
    $scope.isYellow = false;

    UserService.me().then(function(me){
        $scope.ME = me;
        console.log("this is $scope.ME: " )
        console.log( $scope.ME);
        $scope.loggedIn = true;

        $scope.myRole = me.role;
        console.log("my role: " + $scope.myRole);
        if($scope.myRole == "admin") {
            $scope.isAdmin = true;
        }
        
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
        $scope.greenTrips = FutureGreenTripsFactory.query();
        console.log('this is the GREENTRIPS ARRAY: ')
        console.log($scope.greenTrips)
    }
    getGreenTrips();

    function getOrangeTrips() {
       $scope.orangeTrips = FutureOrangeTripsFactory.query();
        console.log('this is the ORANGETRIPS ARRAY: ')
        console.log($scope.orangeTrips)
    }
    getOrangeTrips();

    function getPurpleTrips() {
       $scope.purpleTrips = FuturePurpleTripsFactory.query();
        console.log('this is the PURPLETRIPS ARRAY: ')
        console.log($scope.purpleTrips)
    }
    getPurpleTrips();

    function getYellowTrips() {
       $scope.yellowTrips = FutureYellowTripsFactory.query();
        console.log('this is the YELLOWTRIPS ARRAY: ')
        console.log($scope.yellowTrips)
    }
    getYellowTrips();
       function getRainbowTrips(){
        $scope.rainbowTrips = FutureRainbowTripsFactory.query();
        console.log('this is the RAINBOWTRIPS ARRAY: ')
        console.log($scope.rainbowTrips);
    }
    getRainbowTrips();

}])


.controller('GreenTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentGreenTripsFactory', 'GreenTripSlotsFactory', 'GreenTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentGreenTripsFactory, GreenTripSlotsFactory, GreenTripFilledSlotsFactory){
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
    $scope.greenTrip = CurrentGreenTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.greenTrip: ");
    console.log($scope.greenTrip);

    $scope.showDetails = function(){
        alert($scope.greenTrip.eventDetails);
    }
   
    $scope.maxSlots = $http.get('/api/CurrentGreenTrips/' + tripID).then(function(success){
        console.log(success.data.maxSlots);
        maxSlots = success.data.maxSlots;
        return maxSlots;
    })


    $scope.greenTripSlots = GreenTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.greenTripSlots Array: ");
    console.log($scope.greenTripSlots); 

    

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

//    var slotToDelete = [];            // WE DECIDED TO LEAVE THIS FEATURE OUT!
//    $scope.removeMe = function() {                                      
//         var shouldRemove = confirm('Remove you from this field trip?');
//         if (shouldRemove) {
//             var data = null;
//             UserService.me().then(function(me){
//                 var data = {userID: me.id, eventID: tripID}
//                 console.log(data);
                
//                 return data;
//             }).then (function(data){ 
                
//                var mySlot = $http.get('/api/GreenTripSlots/' + data.eventID + '/' + data.userID);
//                console.log(mySlot);

//                return mySlot;
//             }).then (function(mySlot) {
//                 console.log(mySlot);
//                 var slotToDelete = mySlot.data;
//                 console.log(slotToDelete);
//                 console.log(slotToDelete.id)

//                 return slotToDelete;
//             }).then (function(slotToDelete){
//                 var slotID = slotToDelete.id;
//                 $http.delete('/api/GreenTripSlots/delete/' + slotID);
//                 console.log('deleted successfull')     
//                 $route.reload();
//             }).catch(function(error){
//                 console.log(error);
//             })
//         }   
//     };    

}])

                    

.controller('OrangeTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentOrangeTripsFactory', 'OrangeTripSlotsFactory', 'OrangeTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentOrangeTripsFactory, OrangeTripSlotsFactory, OrangeTripFilledSlotsFactory){
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
    $scope.orangeTrip = CurrentOrangeTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.orangeTrip: ");
    console.log($scope.orangeTrip);

    $scope.showDetails = function(){
        alert($scope.orangeTrip.eventDetails);
    }

    $scope.maxSlots = $http.get('/api/CurrentOrangeTrips/' + tripID).then(function(success){
        console.log(success.data.maxSlots);
        maxSlots = success.data.maxSlots;
        return maxSlots;
    })

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

.controller('PurpleTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentPurpleTripsFactory', 'PurpleTripSlotsFactory', 'PurpleTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentPurpleTripsFactory, PurpleTripSlotsFactory, PurpleTripFilledSlotsFactory){
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
    $scope.purpleTrip = CurrentPurpleTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.purpleTrip: ");
    console.log($scope.purpleTrip);

    $scope.showDetails = function(){
        alert($scope.purpleTrip.eventDetails);
    }

    $scope.maxSlots = $http.get('/api/CurrentPurpleTrips/' + tripID).then(function(success){
        console.log(success.data.maxSlots);
        maxSlots = success.data.maxSlots;
        return maxSlots;
    })

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

.controller('YellowTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentYellowTripsFactory', 'YellowTripSlotsFactory', 'YellowTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentYellowTripsFactory, YellowTripSlotsFactory, YellowTripFilledSlotsFactory){
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
    $scope.yellowTrip = CurrentYellowTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.yellowTrip: ");
    console.log($scope.yellowTrip);

    $scope.showDetails = function(){
        alert($scope.yellowTrip.eventDetails);
    }

    $scope.maxSlots = $http.get('/api/CurrentYellowTrips/' + tripID).then(function(success){
        console.log(success.data.maxSlots);
        maxSlots = success.data.maxSlots;
        return maxSlots;
    })

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

.controller('RainbowTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentRainbowTripsFactory', 'RainbowTripSlotsFactory', 'RainbowTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentRainbowTripsFactory, RainbowTripSlotsFactory, RainbowTripFilledSlotsFactory){
    console.log( "we are in the RainbowTripDetailsController now.")
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
    $scope.rainbowTrip = CurrentRainbowTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.rainbowTrip: ");
    console.log($scope.rainbowTrip);

    $scope.showDetails = function(){
        alert($scope.rainbowTrip.eventDetails);
    }

    $scope.maxSlots = $http.get('/api/CurrentRainbowTrips/' + tripID).then(function(success){
        console.log(success.data.maxSlots);
        maxSlots = success.data.maxSlots;
        return maxSlots;
    })

    $scope.rainbowTripSlots = RainbowTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.rainbowTripSlots Array: ");
    console.log($scope.rainbowTripSlots);

    $scope.signMeUp = function() {
        UserService.me().then(function(me) {
            $scope.ME = me;
            var data = {
                userID: $scope.ME.id,
                eventID: tripID,
                colorID: 5,
            }
            console.log(data);

            var userForEvent = new RainbowTripSlotsFactory(data);
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
                
               var mySlot = $http.get('/api/RainbowTripSlots/' + data.eventID + '/' + data.userID);
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
                $http.delete('/api/RainbowTripSlots/delete/' + slotID);
                console.log('deleted successfull')     
                $route.reload();
            }).catch(function(error){
                console.log(error);
            })
        }   
    }; 
}])

.controller('AdminHomeController', ['$scope', '$location', '$route', '$http', 'UserService', 'CurrentGreenTripsFactory', 'CurrentOrangeTripsFactory', 'CurrentPurpleTripsFactory', 'CurrentYellowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, CurrentGreenTripsFactory, CurrentOrangeTripsFactory, CurrentPurpleTripsFactory, CurrentYellowTripsFactory, $routeParams) {
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


 
    // function getGreenTrips() {
    //     $scope.greenTrips = CurrentGreenTripsFactory.query();
    //     console.log('this is the GREENTRIPS ARRAY: ')
    //     console.log($scope.greenTrips)
    // }
    // getGreenTrips();

    // function getOrangeTrips() {
    //    $scope.orangeTrips = CurrentOrangeTripsFactory.query();
    //     console.log('this is the ORANGETRIPS ARRAY: ')
    //     console.log($scope.orangeTrips)
    // }
    // getOrangeTrips();

    // function getPurpleTrips() {
    //    $scope.purpleTrips = CurrentPurpleTripsFactory.query();
    //     console.log('this is the PURPLETRIPS ARRAY: ')
    //     console.log($scope.purpleTrips)
    // }
    // getPurpleTrips();

    // function getYellowTrips() {
    //    $scope.yellowTrips = CurrentYellowTripsFactory.query();
    //     console.log('this is the YELLOWTRIPS ARRAY: ')
    //     console.log($scope.yellowTrips)
    // }
    // getYellowTrips();

    // $scope.deleteAllTripsAndSlots = function(){     // bind this to button on adminDeleteAllTrips.html

    //       $scope.promptDeleteAllTripsAndSlots = function () {
    //         var confirmDeleteTripsAndSlots = confirm('This will delete every Field Trip and associated user enrollments. Are you sure you want to delete this slot?');
    //         if (shouldDelete) {
    //             var secondConfirmation = confirm('Clicking ok will do it, I promise. Last chance to turn back!')
    //         } if (secondConfirmation){
    //             $http.delete('/api/deleteAllTripsAndSlots').then(function(success){
    //                 alert('the Database has been reset! You can now enter new Field Trips')
    //                 $location.path('/adminAllEvents');
    //             })
    //         }
    //       }
    // };


}])

.controller('AdminCurrentEventsController', ['$scope', '$location', '$route', '$http', 'UserService', 'CurrentGreenTripsFactory', 'CurrentOrangeTripsFactory', 'CurrentPurpleTripsFactory', 'CurrentYellowTripsFactory', 'CurrentRainbowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, CurrentGreenTripsFactory, CurrentOrangeTripsFactory, CurrentPurpleTripsFactory, CurrentYellowTripsFactory, CurrentRainbowTripsFactory, $routeParams) {
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
        $scope.greenTrips = CurrentGreenTripsFactory.query();
        console.log('this is the GREENTRIPS ARRAY: ')
        console.log($scope.greenTrips)
    }
    getGreenTrips();

    function getOrangeTrips() {
       $scope.orangeTrips = CurrentOrangeTripsFactory.query();
        console.log('this is the ORANGETRIPS ARRAY: ')
        console.log($scope.orangeTrips)
    }
    getOrangeTrips();

    function getPurpleTrips() {
       $scope.purpleTrips = CurrentPurpleTripsFactory.query();
        console.log('this is the PURPLETRIPS ARRAY: ')
        console.log($scope.purpleTrips)
    }
    getPurpleTrips();

    function getYellowTrips() {
       $scope.yellowTrips = CurrentYellowTripsFactory.query();
        console.log('this is the YELLOWTRIPS ARRAY: ')
        console.log($scope.yellowTrips)
    }
    getYellowTrips();

    function getRainbowTrips(){
        $scope.rainbowTrips = CurrentRainbowTripsFactory.query();
        console.log('this is the RAINBOWTRIPS ARRAY: ')
        console.log($scope.rainbowTrips)
    }
    getRainbowTrips();

    $scope.deleteAllTripsAndSlots = function(){     // bind this to button on adminDeleteAllTrips.html

          $scope.promptDeleteAllTripsAndSlots = function () {
            var confirmDeleteTripsAndSlots = confirm('This will delete every Field Trip and associated user enrollments. Are you sure you want to delete this slot?');
            if (shouldDelete) {
                var secondConfirmation = confirm('Clicking ok will do it, I promise. Last chance to turn back!')
            } if (secondConfirmation){
                $http.delete('/api/deleteAllTripsAndSlots').then(function(success){
                    alert('the Database has been reset! You can now enter new Field Trips')
                    $location.path('/adminAllEvents');
                })
            }
          }
    };


}])

.controller('AdminFutureEventsController', ['$scope', '$location', '$route', '$http', 'UserService', 'FutureGreenTripsFactory', 'FutureOrangeTripsFactory', 'FuturePurpleTripsFactory', 'FutureYellowTripsFactory', 'FutureRainbowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, FutureGreenTripsFactory, FutureOrangeTripsFactory, FuturePurpleTripsFactory, FutureYellowTripsFactory, FutureRainbowTripsFactory, $routeParams) {

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
        $scope.greenTrips = FutureGreenTripsFactory.query();
        console.log('this is the GREENTRIPS ARRAY: ')
        console.log($scope.greenTrips)
    }
    getGreenTrips();

    function getOrangeTrips() {
       $scope.orangeTrips = FutureOrangeTripsFactory.query();
        console.log('this is the ORANGETRIPS ARRAY: ')
        console.log($scope.orangeTrips)
    }
    getOrangeTrips();

    function getPurpleTrips() {
       $scope.purpleTrips = FuturePurpleTripsFactory.query();
        console.log('this is the PURPLETRIPS ARRAY: ')
        console.log($scope.purpleTrips)
    }
    getPurpleTrips();

    function getYellowTrips() {
       $scope.yellowTrips = FutureYellowTripsFactory.query();
        console.log('this is the YELLOWTRIPS ARRAY: ')
        console.log($scope.yellowTrips)
    }
    getYellowTrips();

    function getRainbowTrips(){
        $scope.rainbowTrips = FutureRainbowTripsFactory.query();
        console.log('this is the RAINBOWTRIPS ARRAY: ')
        console.log($scope.rainbowTrips)
    }
    getRainbowTrips();


}])


.controller('adminGreenTripDetailsController', ['$scope', '$location', '$route', '$http', "$window", 'UserService', '$routeParams', 'CurrentGreenTripsFactory', 'GreenTripSlotsFactory', 'GreenTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentGreenTripsFactory, GreenTripSlotsFactory, GreenTripFilledSlotsFactory){
    
    console.log( "we are in the GreenTripsDetailsController now.")

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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();

    var tripID = $routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.greenTrip = CurrentGreenTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.greenTrip: ");
    console.log($scope.greenTrip);

    $scope.showDetails = function(){
        alert($scope.greenTrip.eventDetails);
    }

    $scope.greenTripSlots = $http.get('/api/GreenTripSlots/' + tripID).then(function(success){
        $scope.greenTripSlots = success.data;
        console.log($scope.greenTripSlots);
    })

    $scope.addParticipantLink = "addParticipant/" + tripID;
    console.log($scope.addParticipantLink);
      

}])

                    

.controller('adminOrangeTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentOrangeTripsFactory', 'OrangeTripSlotsFactory', 'OrangeTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentOrangeTripsFactory, OrangeTripSlotsFactory, OrangeTripFilledSlotsFactory){

    console.log( "we are in the OrangeTripDetailsController now.")

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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();

    var slotToDelete = [];
    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.orangeTrip = CurrentOrangeTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.orangeTrip: ");
    console.log($scope.orangeTrip);

    $scope.showDetails = function(){
        alert($scope.orangeTrip.eventDetails);
    }

    $scope.orangeTripSlots = OrangeTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.orangeTripSlots Array: ");
    console.log($scope.orangeTripSlots);

   $scope.addParticipantLink = "addParticipant/" + tripID;
    console.log($scope.addParticipantLink); 
}])

.controller('adminPurpleTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentPurpleTripsFactory', 'PurpleTripSlotsFactory', 'PurpleTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentPurpleTripsFactory, PurpleTripSlotsFactory, PurpleTripFilledSlotsFactory){

    console.log( "we are in the PurpleTripDetailsController now.")

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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();

    var slotToDelete = [];
    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.purpleTrip = CurrentPurpleTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.purpleTrip: ");
    console.log($scope.purpleTrip);

    $scope.showDetails = function(){
        alert($scope.purpleTrip.eventDetails);
    }

    $scope.purpleTripSlots = PurpleTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.purpleTripSlots Array: ");
    console.log($scope.purpleTripSlots);

    $scope.addParticipantLink = "addParticipant/" + tripID;
    console.log($scope.addParticipantLink);
}])

.controller('adminYellowTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentYellowTripsFactory', 'YellowTripSlotsFactory', 'YellowTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentYellowTripsFactory, YellowTripSlotsFactory, YellowTripFilledSlotsFactory){
    console.log( "we are in the YellowTripDetailsController now.")
    
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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();

    var slotToDelete = [];
    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.yellowTrip = CurrentYellowTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.yellowTrip: ");
    console.log($scope.yellowTrip);

    $scope.showDetails = function(){
        alert($scope.yellowTrip.eventDetails);
    }

    $scope.yellowTripSlots = YellowTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.yellowTripSlots Array: ");
    console.log($scope.yellowTripSlots);

    $scope.addParticipantLink = "addParticipant/" + tripID;
    console.log($scope.addParticipantLink);
}])


.controller('adminRainbowTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentRainbowTripsFactory', 'RainbowTripSlotsFactory', 'RainbowTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentRainbowTripsFactory, RainbowTripSlotsFactory, RainbowTripFilledSlotsFactory){
    console.log( "we are in the adminRainbowTripDetailsController now.")

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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();


    var slotToDelete = [];
    var tripID =$routeParams.id;
    console.log("This is the tripID: " + tripID);
    $scope.rainbowTrip = CurrentRainbowTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.rainbowTrip: ");
    console.log($scope.rainbowTrip);

    $scope.showDetails = function(){
        alert($scope.rainbowTrip.eventDetails);
    }

    $scope.rainbowTripSlots = RainbowTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.rainbowTripSlots Array: ");
    console.log($scope.rainbowTripSlots);

    $scope.addParticipantLink = "addParticipant/" + tripID;
    console.log($scope.addParticipantLink);

}])

.controller('adminSlotDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'UpdateSlotFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, UpdateSlotFactory){

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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();


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
.controller('adminAddTripController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'AdminTripFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, AdminTripFactory){
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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();

    $scope.submitTripGreen = function() {
        var data = {
            eventName: $scope.trip.eventName,
            eventDate: $scope.trip.eventDate,
            eventDescription: $scope.trip.eventDescription,
            colorID: '1',
            eventTime: $scope.trip.eventTime,
            eventCost: $scope.trip.eventCost,
            maxSlots: $scope.trip.maxSlots,
            eventDetails: $scope.trip.eventDetails,
        }

        var tripToSubmit = new AdminTripFactory(data);
        tripToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminEventsNavMenu');
        });
    }
    $scope.submitTripOrange = function() {
        var data = {
            eventName: $scope.trip.eventName,
            eventDate: $scope.trip.eventDate,
            eventDescription: $scope.trip.eventDescription,
            colorID: '2',
            eventTime: $scope.trip.eventTime,
            eventCost: $scope.trip.eventCost,
            maxSlots: $scope.trip.maxSlots,
            eventDetails: $scope.trip.eventDetails,
        }

        var tripToSubmit = new AdminTripFactory(data);
        tripToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminEventsNavMenu');
        });
    }
     $scope.submitTripPurple = function() {
        var data = {
            eventName: $scope.trip.eventName,
            eventDate: $scope.trip.eventDate,
            eventDescription: $scope.trip.eventDescription,
            colorID: '3',
            eventTime: $scope.trip.eventTime,
            eventCost: $scope.trip.eventCost,
            maxSlots: $scope.trip.maxSlots,
            eventDetails: $scope.trip.eventDetails,
        }

        var tripToSubmit = new AdminTripFactory(data);
        tripToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminEventsNavMenu');
        });
    }
     $scope.submitTripYellow = function() {
        var data = {
            eventName: $scope.trip.eventName,
            eventDate: $scope.trip.eventDate,
            eventDescription: $scope.trip.eventDescription,
            colorID: '4',
            eventTime: $scope.trip.eventTime,
            eventCost: $scope.trip.eventCost,
            maxSlots: $scope.trip.maxSlots,
            eventDetails: $scope.trip.eventDetails,
        }

        var tripToSubmit = new AdminTripFactory(data);
        tripToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminEventsNavMenu');
        });
    }
      $scope.submitTripRainbow = function() {
        var data = {
            eventName: $scope.trip.eventName,
            eventDate: $scope.trip.eventDate,
            eventDescription: $scope.trip.eventDescription,
            colorID: '5',
            eventTime: $scope.trip.eventTime,
            eventCost: $scope.trip.eventCost,
            maxSlots: $scope.trip.maxSlots,
            eventDetails: $scope.trip.eventDetails,
        }

        var tripToSubmit = new AdminTripFactory(data);
        tripToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminEventsNavMenu');
        });
    }



}])
.controller('adminEditTripController', ['$scope', '$location', '$route', '$http',  '$window', 'UserService', '$routeParams', 'AdminTripFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, AdminTripFactory){
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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();
//===========================================================
    // EITHER THIS:

    var tripID = $routeParams.id;
    $scope.tripToEdit = AdminTripFactory.get( {id: tripID}, function(){
        console.log($scope.tripToEdit.eventDate);
        $scope.tripToEdit.eventDate = new Date($scope.tripToEdit.eventDate);
        console.log($scope.tripToEdit.eventDate);
        console.log("this is the $scope.tripToEdit: ");
        console.log($scope.tripToEdit);
        
        // $scope.tripToEdit.paid = String($scope.tripToEdit.paid); // did this copying adminEditSlotDetails update function
    } );
    

    // this is how it did work previously
    $scope.updateTrip = function() {
        // $scope.tripToEdit.eventDate = Date.parse($scope.tripToEdit.eventDate);
        $scope.tripToEdit.$update(function(success) {
            console.log('the trip was updated!');
            // $route.reload();
            $location.path('/adminEventsNavMenu');
        });
    };
//========================================================
    // OR THIS:

    // var tripID = $routeParams.id;
    // $scope.tripToEdit = $http.get('api/adminTrips/' + tripID).then(function(success){
    //     $scope.tripToEdit = success.data;
    //     console.log("this is the $scope.tripToEdit: ");
    //     // console.log($scope.tripToEdit);
    //     // console.log($scope.tripToEdit.eventDate);
    //     // $scope.tripToEdit.eventDate = success.data.eventDate;
    //     // console.log($scope.tripToEdit.eventDate);
    //     var tripToEdit = $scope.tripToEdit
    //     return $scope.tripToEdit;
    // }).then(function(tripToEdit){
    //     tripToEdit.eventDate = new Date(tripToEdit.eventDate);
    //     return tripToEdit
    // }.then(function(tripToEdit){
    //     $scope.updateTrip = $http.put('api/adminTrips/' + tripID)

    // }));
    
    // // write this as an $HTTP.put request ???
    // $scope.updateTrip = function(){
    //     $http.put('api/adminTrips/' + tripID).then(function(tripToEdit){

    //     })
    // }
//================================================================


    $scope.promptDeleteThisTrip = function () {
        var shouldDelete = confirm('Are you sure you want to delete this trip?');
        if (shouldDelete) {
            console.log($scope.tripToEdit);

            $scope.tripToEdit.$delete(function (success) {
                $location.path('/adminEventsNavMenu');
            });
        };
    };

}])
.controller('adminUsersController', ['$scope', '$location', '$route', '$http',  '$window', 'UserService', '$routeParams', 'AdminUserFactoryGreen', 'AdminUserFactoryOrange', 'AdminUserFactoryPurple', 'AdminUserFactoryYellow','AdminUserFactoryAdmin', function($scope, $location, $route, $http, $window, UserService, $routeParams, AdminUserFactoryGreen, AdminUserFactoryOrange, AdminUserFactoryPurple, AdminUserFactoryYellow, AdminUserFactoryAdmin){
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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();

    function getGreenUsers() {
        $scope.greenUsers = AdminUserFactoryGreen.query();
        console.log('this is the GreenUsers ARRAY: ')
        console.log($scope.greenUsers);
    }
    getGreenUsers();
    
    function getOrangeUsers() {
        $scope.orangeUsers = AdminUserFactoryOrange.query();
        console.log('this is the OrangeUsers ARRAY: ')
        console.log($scope.orangeUsers);
    }
    getOrangeUsers();
    
    function getPurpleUsers() {
        $scope.purpleUsers = AdminUserFactoryPurple.query();
        console.log('this is the PurpleUsers ARRAY: ')
        console.log($scope.purpleUsers);
    }
    getPurpleUsers();
    
    function getYellowUsers() {
        $scope.yellowUsers = AdminUserFactoryYellow.query();
        console.log('this is the YellowUsers ARRAY: ')
        console.log($scope.yellowUsers);
    }
    getYellowUsers();

    function getAdminUsers(){
         $scope.administrators = AdminUserFactoryAdmin.query();
        console.log('this is the Administrators ARRAY: ')
        console.log($scope.administrators);
    }
    getAdminUsers();


    //========== now write functions for adding Users for all 4 color groups ======= //

     $scope.submitUserGreen = function() {
        var data = {
            firstName: $scope.user.firstName,
            lastName: $scope.user.lastName,
            email: $scope.user.email,
            password: $scope.user.password,
            colorID: '1',
            role: $scope.user.role,
        }

        var userToSubmit = new AdminUserFactoryGreen(data);
        userToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminAllUsers');
        }, function(err){
                console.log(err);
                alert('This User is already registered');
        
            });
    }

    $scope.submitUserOrange = function() {
        var data = {
            firstName: $scope.user.firstName,
            lastName: $scope.user.lastName,
            email: $scope.user.email,
            password: $scope.user.password,
            colorID: '2',
            role: $scope.user.role,
        }

        var userToSubmit = new AdminUserFactoryOrange(data);
        userToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminAllUsers');
        }, function(err){
                console.log(err);
                alert('This User is already registered.');
            });
    }

    $scope.submitUserPurple = function() {
        var data = {
            firstName: $scope.user.firstName,
            lastName: $scope.user.lastName,
            email: $scope.user.email,
            password: $scope.user.password,
            colorID: '3',
            role: $scope.user.role,
        }

        var userToSubmit = new AdminUserFactoryPurple(data);
        userToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminAllUsers');
        }, function(err){
                console.log(err);
                alert('This User is already registered.');
        
            });
    }
    $scope.submitUserYellow = function() {
        var data = {
            firstName: $scope.user.firstName,
            lastName: $scope.user.lastName,
            email: $scope.user.email,
            password: $scope.user.password,
            colorID: '4',
            role: $scope.user.role,
        }

        var userToSubmit = new AdminUserFactoryYellow(data);
        userToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminAllUsers');
        }, function(err){
                console.log(err);
                alert('This User is already registered.');
        
            });
    }
        $scope.submitUserAdmin = function() {
        var data = {
            firstName: $scope.user.firstName,
            lastName: $scope.user.lastName,
            email: $scope.user.email,
            password: $scope.user.password,
            colorID: '0',
            role: $scope.user.role,
        }

        var userToSubmit = new AdminUserFactoryAdmin(data);
        userToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminAllUsers');
        }, function(err){
                console.log(err);
                alert('This User is already registered.');
        
            });
    }

}])

.controller('adminEditUserController', ['$scope', '$location', '$route', '$http',  '$window', 'UserService', '$routeParams', 'UserFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, UserFactory){
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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();
//  script for editing a user

    var userID = $routeParams.id;

    $scope.user = UserFactory.get({id: userID}), function(){
        $scope.user = success.data;
        
    }

    // function generatePassword() {
    //     var length = 8,
    //         charset = "abcdefghijkmnopqrstuvwxyzACDEFGHJKMNPQRSTUVWXY345679",
    //         retVal = "";
    //     for (var i = 0, n = charset.length; i < length; ++i) {
    //         retVal += charset.charAt(Math.floor(Math.random() * n));
    //     }
    //     return retVal;
    // }
    $scope.generatePassword = function (){
        var length = 8,
         charset = "abcdefghijkmnopqrstuvwxyzACDEFGHJKMNPQRSTUVWXY345679",
         retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        $scope.newPassword = retVal;
        console.log($scope.newPassword);
        $scope.user.password = $scope.newPassword;
        return $scope.newPassword;
    };
    // $scope.generatePassword = generatePassword();

    $scope.updateThisUser = function(){
        console.log('this is the user to be edited: ' );
        console.log($scope.user);
        $scope.user.$update(function(success){
           console.log('The slot was updated!');
           $location.path('/adminAllUsers') ;
        })
    }

    $scope.promptDeleteThisUser = function(){
        var shouldDelete = confirm('Are you sure you want to delete this user?');
        if(shouldDelete) {
            console.log($scope.user);
            $scope.user.$delete(function(sucess){
                $location.path('/adminAllUsers');
            })
        }
    }

}])

.controller('addParticipantController', ['$scope', '$location', '$route', '$http',  '$window', 'UserService', '$routeParams', 'UserFactory','AdminParticipantFactory', 'AdminTripFactory', 'AdminParticipantSignUpFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, UserFactory, AdminParticipantFactory, AdminTripFactory, AdminParticipantSignUpFactory){
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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();

    $scope.class = "hideIfEmpty";
    $scope.participantToSignUp = [];

    $scope.tripArray = [];
    var tripID = $routeParams.id;
    $scope.trip = $http.get('/api/AdminTrips/' + tripID).then(function(success){
        $scope.trip = success.data;
        console.log($scope.trip);
        $scope.tripArray.push($scope.trip);        
    });
    console.log($scope.trip);
    // var colorID = $scope.trip.colorID;
    console.log('colorID: ');
    // console.log(colorID);


    $scope.searchForParticipant = function(){
        $scope.participantToSignUp = [];
        var firstName = $scope.participant.firstName;
        var lastName = $scope.participant.lastName;
      
        var returnedParticipant = AdminParticipantFactory.get( {firstName, lastName}, function(){
        console.log($scope.participantToSignUp);
        $scope.participantToSignUp.push(returnedParticipant);
        console.log($scope.participantToSignUp);

        $scope.class = "";
        
    });
    };

    $scope.submitParticipant = function(){
        var data ={
            userID: $scope.participantToSignUp[0].id,
            eventID: tripID,
            colorID: $scope.tripArray[0].colorID,
            paid: '1',
        }
        console.log(data);
        var participantToSubmit = new AdminParticipantSignUpFactory(data);
        participantToSubmit.$save(function(success){
            console.log(participantToSubmit);
            console.log("participant is now signed up");
            $route.reload(); // write location string using colorID OF TRIP AND tripID;
        }, function(err){
            console.log(err);
            alert('participant is already signed up for this event');
        })
    };

    



}])

.controller('adminUserProfileController', ['$scope', '$location', '$route', '$http',  '$window', 'UserService', '$routeParams', 'UserFactory', 'UserTripFactory', 'UpdateSlotFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, UserFactory, UserTripFactory, UpdateSlotFactory){
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

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();
    UserService.isAdmin();
  

    userID = $routeParams.id;
    $scope.participant = $http.get('/api/users/' + userID).then(function(success){
        $scope.participant = success.data;
        console.log($scope.participant);
        var participant = $scope.participant;
        return participant;
    }).then(function(participant){
       var colorGroup = participant.Colors;
       console.log('colorGroup')
       console.log(colorGroup);
       $scope.colorGroup = colorGroup;
       return colorGroup;
    }).then(function(colorGroup){
          var CurrentParticipantTrips = $http.get('/api/userTrips/current/' + userID).then(function(success){
                CurrentParticipantTrips = success.data;
                $scope.CurrentParticipantTrips = CurrentParticipantTrips;
                console.log("CurrentParticipantTrips: ")
                console.log(CurrentParticipantTrips);
                return CurrentParticipantTrips;
    }).then(function(CurrentParticipantTrips){   
            var currentTotalDue = 0;
            var amtPaidThisMonth = 0;
            var currentBalance = 0;
            var currentSlotIDs = [];
            $scope.futureTotalDue = 0;         
            for ( z = 0; z < CurrentParticipantTrips.length; z++) {
                currentSlotIDs.push(CurrentParticipantTrips[z].id);
                  
                
                console.log("event cost for CurrentParticipantTrips[" + z + "]: ");
                console.log(CurrentParticipantTrips[z].eventCost);
                if (CurrentParticipantTrips[z].paid == 1){
                    amtPaidThisMonth = amtPaidThisMonth + CurrentParticipantTrips[z].eventCost;
                    console.log('amtPaidThisMonth: ');
                    console.log(amtPaidThisMonth);
                }

                currentTotalDue = currentTotalDue + CurrentParticipantTrips[z].eventCost;
                
                
            }
            
            $scope.currentTotalDue = currentTotalDue;
            console.log('Current total due: ');
            console.log($scope.currentTotalDue);

            $scope.amtPaidThisMonth = amtPaidThisMonth;
            console.log('amtPaidThisMonth: ');
            console.log(amtPaidThisMonth);

            currentBalance = currentTotalDue - amtPaidThisMonth;
            console.log("currentBalance: ")
            console.log(currentBalance);
            $scope.currentBalance = currentBalance;

            console.log('Current Slot IDs array: ')
            console.log(currentSlotIDs);

            
            return $scope.currentTotalDue, $scope.amtPaidThisMonth, $scope.currentBalance, currentSlotIDs;
    }).then(function(currentSlotIDs){
            
            $scope.markCurrentAsPaid = function(){
            
                console.log(currentSlotIDs);

                for(i=0; i< currentSlotIDs.length; i++){
                    $scope.slotToEdit= $http.get('api/AdminTripSlots/slot/' + currentSlotIDs[i]).then( function(success){
                    $scope.slotToEdit = success.data;
                    var slotToEdit = $scope.slotToEdit;
                    console.log("slotToEdit: ")
                    console.log(slotToEdit);
                    return slotToEdit;                
                    }).then(function(slotToEdit){
                        $scope.slotToEdit = slotToEdit;
                        console.log("current value of $scope.slotToEdit.paid: ")
                        console.log($scope.slotToEdit.paid);
                        $scope.slotToEdit.paid = '1';  
                        console.log("hardcoding paid value as: ")
                        console.log($scope.slotToEdit.paid);
                        var data = {
                           paid: slotToEdit.paid,
                        };

                        $http.put( 'api/AdminTripSlots/slot/'+ slotToEdit.id +'/?', data)
                        .success(function (data, status){
                            console.log("success");
                            console.log(data);
                            $scope.ServerResponse = data;
                            $route.reload();
                        })
                        .error(function (data, status){
                            (console.log("error"))
                            console.log(data);
                            console.log(status);
                        })

                    })
                
                };

                

            };
    });

      var FutureParticipantTrips = $http.get('/api/userTrips/future/' + userID).then(function(success){
                FutureParticipantTrips = success.data;
                $scope.FutureParticipantTrips = FutureParticipantTrips;
                console.log("FutureParticipantTrips: ")
                console.log(FutureParticipantTrips);
                return FutureParticipantTrips;
        }).then(function(FutureParticipantTrips){   
            var futureTotalDue = 0;
            var amtPaidForNextMonth = 0;
            var futureBalance = 0; 
            var futureSlotIDs = []; 
            $scope.futureTotalDue = 0;       
            for ( z = 0; z < FutureParticipantTrips.length; z++) {
                futureSlotIDs.push(FutureParticipantTrips[z].id);
                  
                
                console.log("event cost for FutureParticipantTrips[" + z + "]: ");
                console.log(FutureParticipantTrips[z].eventCost);
                if (FutureParticipantTrips[z].paid == 1){
                    amtPaidForNextMonth = amtPaidForNextMonth + FutureParticipantTrips[z].eventCost;
                    console.log('amtPaidForNextMonth: ');
                    console.log(amtPaidForNextMonth);
                }

                futureTotalDue = futureTotalDue + FutureParticipantTrips[z].eventCost;
                console.log(futureTotalDue);

            }
            
            $scope.futureTotalDue = futureTotalDue;
            console.log('Future total due: ');
            console.log($scope.futureTotalDue);

            $scope.amtPaidForNextMonth = amtPaidForNextMonth;
            console.log('amtPaidForNextMonth: ');
            console.log(amtPaidForNextMonth);

            futureBalance = futureTotalDue - amtPaidForNextMonth;
            console.log("futureBalance: ")
            console.log(futureBalance);
            $scope.futureBalance = futureBalance;

            console.log('Future Slot IDs array: ')
            console.log(futureSlotIDs);



            return $scope.futureTotalDue, $scope.amtPaidForNextMonth, $scope.futureBalance, futureSlotIDs;
         
    }).then(function(futureSlotIDs){
            $scope.markFutureAsPaid = function(){
                console.log(futureSlotIDs);
                for( i=0; i < futureSlotIDs.length; i++){
                    $scope.slotToEdit= $http.get('api/AdminTripSlots/slot/' + futureSlotIDs[i]).then( function(success){
                    $scope.slotToEdit = success.data;
                    var slotToEdit = $scope.slotToEdit;
                    console.log("slotToEdit: ")
                    console.log(slotToEdit);
                    return slotToEdit;                
                    }).then(function(slotToEdit){
                        $scope.slotToEdit = slotToEdit;
                        console.log("current value of $scope.slotToEdit.paid: ")
                        console.log($scope.slotToEdit.paid);
                        $scope.slotToEdit.paid = '1';
                        console.log("hardcoding paid value as: ")
                        console.log($scope.slotToEdit.paid);
                        var data = {
                           paid: slotToEdit.paid,
                        };

                        $http.put( 'api/AdminTripSlots/slot/'+ slotToEdit.id +'/?', data)
                        .success(function (data, status){
                            console.log("success");
                            console.log(data);
                            $scope.ServerResponse = data;
                            $route.reload();
                        })
                        .error(function (data, status){
                            (console.log("error"))
                            console.log(data);
                            console.log(status);
                        })

                    })
                }

        
            };

    })






    })

  


    
    



}])

.controller('UserProfileController', ['$scope', '$location', '$route', '$http',  '$window', 'UserService', '$routeParams', 'UserFactory', 'UserTripFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, UserFactory, UserTripFactory){
    $window.scrollTo(0, 0);

    UserService.isLoggedIn();
    $scope.loggedIn = false;
    UserService.me().then(function(me){
        $scope.ME = me;
        $scope.loggedIn = true;
    });
    $scope.logout = function () {
        $location.path('/')
        UserService.logout().then(function(){
        
        });
    }

    UserService.requireLogin();
    UserService.isLoggedIn();
    UserService.isAdmin();
    UserService.isMyProfile();
    UserService.requireIsMyProfile();

    userID = $routeParams.id;
    $scope.participant = UserFactory.get({id: userID },function(){
        console.log($scope.participant);
    })


    //  var httpParticipantTrips = $http.get('/api/userTrips/currentFuture/' + userID).then(function(success){
    //             $scope.participantTrips = success.data;
    //             httpParticipantTrips = success.data;
    //             console.log('httpParticipantTrips array: ')
    //             console.log(httpParticipantTrips);
    //             return httpParticipantTrips;
    // }).then(function(httpParticipantTrips){   
    //         var totalDue = 0;         
    //         for ( z = 0; z < httpParticipantTrips.length; z++) {  
                
    //             console.log("event cost for httpParticipantTrips[" + z + "]: ");
    //             console.log(httpParticipantTrips[z].eventCost);

    //             totalDue = totalDue + httpParticipantTrips[z].eventCost;

    //             console.log('total due: ');
    //             $scope.totalDue = totalDue;
    //             console.log($scope.totalDue);
    //     }
    //      return $scope.totalDue;
    // })

    var CurrentParticipantTrips = $http.get('/api/userTrips/current/' + userID).then(function(success){
                $scope.CurrentParticipantTrips = success.data;
                CurrentParticipantTrips = success.data;
                console.log(CurrentParticipantTrips);
                return CurrentParticipantTrips;
    }).then(function(CurrentParticipantTrips){   
           var currentTotalDue = 0;
            var amtPaidThisMonth = 0;
            var currentBalance = 0;
            $scope.futureTotalDue = 0;         
            for ( z = 0; z < CurrentParticipantTrips.length; z++) {  
               
                
                console.log("event cost for CurrentParticipantTrips[" + z + "]: ");
                console.log(CurrentParticipantTrips[z].eventCost);
                if (CurrentParticipantTrips[z].paid == 1){
                    amtPaidThisMonth = amtPaidThisMonth + CurrentParticipantTrips[z].eventCost;
                    console.log('amtPaidThisMonth: ');
                    console.log(amtPaidThisMonth);
                }

                currentTotalDue = currentTotalDue + CurrentParticipantTrips[z].eventCost;
                
                
            }
            
            $scope.currentTotalDue = currentTotalDue;
            console.log('Current total due: ');
            console.log($scope.currentTotalDue);

            $scope.amtPaidThisMonth = amtPaidThisMonth;
            console.log('amtPaidThisMonth: ');
            console.log(amtPaidThisMonth);

            currentBalance = currentTotalDue - amtPaidThisMonth;
            console.log("currentBalance: ")
            console.log(currentBalance);
            $scope.currentBalance = currentBalance;

            
            return $scope.currentTotalDue, $scope.amtPaidThisMonth, $scope.currentBalance;
    })

      var FutureParticipantTrips = $http.get('/api/userTrips/future/' + userID).then(function(success){
                $scope.FutureParticipantTrips = success.data;
                FutureParticipantTrips = success.data;
                console.log(FutureParticipantTrips);
                return FutureParticipantTrips;
        }).then(function(FutureParticipantTrips){   
            var futureTotalDue = 0;
            var amtPaidForNextMonth = 0;
            var futureBalance = 0;  
            $scope.futureTotalDue = 0;       
            for ( z = 0; z < FutureParticipantTrips.length; z++) {  
                
                console.log("event cost for FutureParticipantTrips[" + z + "]: ");
                console.log(FutureParticipantTrips[z].eventCost);
                if (FutureParticipantTrips[z].paid == 1){
                    amtPaidForNextMonth = amtPaidForNextMonth + FutureParticipantTrips[z].eventCost;
                    console.log('amtPaidForNextMonth: ');
                    console.log(amtPaidForNextMonth);
                }

                futureTotalDue = futureTotalDue + FutureParticipantTrips[z].eventCost;
                console.log(futureTotalDue);

            }
            
            $scope.futureTotalDue = futureTotalDue;
            console.log('Future total due: ');
            console.log($scope.futureTotalDue);

            $scope.amtPaidForNextMonth = amtPaidForNextMonth;
            console.log('amtPaidForNextMonth: ');
            console.log(amtPaidForNextMonth);

            futureBalance = futureTotalDue - amtPaidForNextMonth;
            console.log("futureBalance: ")
            console.log(futureBalance);
            $scope.futureBalance = futureBalance;



            return $scope.futureTotalDue, $scope.amtPaidForNextMonth, $scope.futureBalance;
         
    })

 

    
    



}])
