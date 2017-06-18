angular.module('FoundationTrips.controllers',[])

.controller('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
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

.controller('UserHomeMenuController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
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

.controller('allCurrentEventsController', ['$scope', '$location', '$route', '$http', 'UserService', 'CurrentGreenTripsFactory', 'CurrentOrangeTripsFactory', 'CurrentPurpleTripsFactory', 'CurrentYellowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, CurrentGreenTripsFactory, CurrentOrangeTripsFactory, CurrentPurpleTripsFactory, CurrentYellowTripsFactory, $routeParams) {
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

}])

.controller('allFutureEventsController', ['$scope', '$location', '$route', '$http', 'UserService', 'FutureGreenTripsFactory', 'FutureOrangeTripsFactory', 'FuturePurpleTripsFactory', 'FutureYellowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, FutureGreenTripsFactory, FutureOrangeTripsFactory, FuturePurpleTripsFactory, FutureYellowTripsFactory, $routeParams) {
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
    // console.log("$scope.greenTrip.eventDate: ")
    // console.log($scope.greenTrip.eventDate);
    // console.log("$scope.greenTrip.maxSlots: ")
    // console.log($scope.greenTrip.maxSlots);

    $scope.maxSlots = $http.get('/api/CurrentGreenTrips/' + tripID).then(function(success){
        console.log(success.data.maxSlots);
        maxSlots = success.data.maxSlots;
        return maxSlots;
    })


    $scope.greenTripSlots = GreenTripSlotsFactory.query( {id: tripID} );
    console.log("this is the $scope.greenTripSlots Array: ");
    console.log($scope.greenTripSlots);

    // $scope.greenTripSlots = [];
    // $scope.greenTripSlots = $http.get('/api/GreenTripSlots/' + tripID).then(function(success){
    //     $scope.greenTripSlots = success.data;
    //     console.log("this is the $scope.greenTripSlots Array: ");
    //     console.log($scope.greenTripSlots);
    //     var tripSlotsArray = $scope.greenTripSlots;
    //     return tripSlotsArray;
    // }).then(function(tripSlotsArray){
    //     for (var i=0; i<tripSlotsArray.length; i++ ){
    //         var ngSlot = $scope.greenTripSlots[i];
    //         console.log(ngSlot);
    //         $scope.slotIsMine = false;
    //         if(ngSlot.userID == $scope.ME.id){       //faulty logic to hide names with ng-show="slotisMine" and ng-hide="slotisMine"
    //             $scope.slotIsMine = true;
                
    //             console.log('values to compare: ')
    //             console.log("ngSlot.userID: " + ngSlot.userID);
    //             console.log("$scope.ME.id: " + $scope.ME.id);
    //             console.log("if both are equal than slotIsMine = true")
    //             console.log($scope.slotIsMine);
    //             }
    //         }
    //     });
    
    

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

.controller('AdminCurrentEventsController', ['$scope', '$location', '$route', '$http', 'UserService', 'CurrentGreenTripsFactory', 'CurrentOrangeTripsFactory', 'CurrentPurpleTripsFactory', 'CurrentYellowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, CurrentGreenTripsFactory, CurrentOrangeTripsFactory, CurrentPurpleTripsFactory, CurrentYellowTripsFactory, $routeParams) {
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

.controller('AdminFutureEventsController', ['$scope', '$location', '$route', '$http', 'UserService', 'FutureGreenTripsFactory', 'FutureOrangeTripsFactory', 'FuturePurpleTripsFactory', 'FutureYellowTripsFactory', '$routeParams', function($scope, $location, $route, $http, UserService, FutureGreenTripsFactory, FutureOrangeTripsFactory, FuturePurpleTripsFactory, FutureYellowTripsFactory, $routeParams) {
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


.controller('adminGreenTripDetailsController', ['$scope', '$location', '$route', '$http', "$window", 'UserService', '$routeParams', 'CurrentGreenTripsFactory', 'GreenTripSlotsFactory', 'GreenTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentGreenTripsFactory, GreenTripSlotsFactory, GreenTripFilledSlotsFactory){
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
    $scope.greenTrip = CurrentGreenTripsFactory.get( {id: tripID} );
    console.log("this is the $scope.greenTrip: ");
    console.log($scope.greenTrip);

    $scope.greenTripSlots = $http.get('/api/GreenTripSlots/' + tripID).then(function(success){
        $scope.greenTripSlots = success.data;
        console.log($scope.greenTripSlots);
    })
      

}])

                    

.controller('adminOrangeTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentOrangeTripsFactory', 'OrangeTripSlotsFactory', 'OrangeTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentOrangeTripsFactory, OrangeTripSlotsFactory, OrangeTripFilledSlotsFactory){
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
    $scope.orangeTrip = CurrentOrangeTripsFactory.get( {id: tripID} );
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

.controller('adminPurpleTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentPurpleTripsFactory', 'PurpleTripSlotsFactory', 'PurpleTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentPurpleTripsFactory, PurpleTripSlotsFactory, PurpleTripFilledSlotsFactory){
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
    $scope.purpleTrip = CurrentPurpleTripsFactory.get( {id: tripID} );
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

.controller('adminYellowTripDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'CurrentYellowTripsFactory', 'YellowTripSlotsFactory', 'YellowTripFilledSlotsFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, CurrentYellowTripsFactory, YellowTripSlotsFactory, YellowTripFilledSlotsFactory){
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
    $scope.yellowTrip = CurrentYellowTripsFactory.get( {id: tripID} );
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

.controller('adminSlotDetailsController', ['$scope', '$location', '$route', '$http', '$window', 'UserService', '$routeParams', 'UpdateSlotFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, UpdateSlotFactory){

    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();

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
    $window.scrollTo(0, 0);


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
    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();

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

    $scope.submitTripGreen = function() {
        var data = {
            eventName: $scope.trip.eventName,
            eventDate: $scope.trip.eventDate,
            eventDescription: $scope.trip.eventDescription,
            colorID: '1',
            eventTime: $scope.trip.eventTime,
            eventCost: $scope.trip.eventCost,
            maxSlots: $scope.trip.maxSlots,
        }

        var tripToSubmit = new AdminTripFactory(data);
        tripToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminAllEvents');
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
        }

        var tripToSubmit = new AdminTripFactory(data);
        tripToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminAllEvents');
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
        }

        var tripToSubmit = new AdminTripFactory(data);
        tripToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminAllEvents');
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
        }

        var tripToSubmit = new AdminTripFactory(data);
        tripToSubmit.$save(function (success) {
            console.log("Trip submitted successfully");
            $location.path('/adminAllEvents');
        });
    }



}])
.controller('adminEditTripController', ['$scope', '$location', '$route', '$http',  '$window', 'UserService', '$routeParams', 'AdminTripFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, AdminTripFactory){
    $window.scrollTo(0, 0);
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
//===========================================================
    // EITHER THIS:

    var tripID = $routeParams.id;
    $scope.tripToEdit = AdminTripFactory.get( {id: tripID}, function(){
        console.log($scope.tripToEdit.eventDate);
        $scope.tripToEdit.eventDate = new Date($scope.tripToEdit.eventDate);
        console.log($scope.tripToEdit.eventDate);
        console.log("this is the $scope.tripToEdit: ");
        console.log($scope.tripToEdit);
    } );
    

    // this is how it did work previously
    $scope.updateTrip = function() {
        // $scope.tripToEdit.eventDate = Date.parse($scope.tripToEdit.eventDate);
        $scope.tripToEdit.$update(function(success) {
            console.log('the trip was updated!');
            // $route.reload();
            $location.path('/adminAllEvents');
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
                $location.path('/adminAllEvents');
            });
        };
    };

}])
.controller('adminUsersController', ['$scope', '$location', '$route', '$http',  '$window', 'UserService', '$routeParams', 'AdminUserFactoryGreen', 'AdminUserFactoryOrange', 'AdminUserFactoryPurple', 'AdminUserFactoryYellow', function($scope, $location, $route, $http, $window, UserService, $routeParams, AdminUserFactoryGreen, AdminUserFactoryOrange, AdminUserFactoryPurple, AdminUserFactoryYellow){
    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();

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
                alert('This User is already registered.');
        
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

}])

.controller('adminEditUserController', ['$scope', '$location', '$route', '$http',  '$window', 'UserService', '$routeParams', 'UserFactory', function($scope, $location, $route, $http, $window, UserService, $routeParams, UserFactory){
    $window.scrollTo(0, 0);
    UserService.requireLogin();
    UserService.requireAdmin();
    UserService.isLoggedIn();

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
//  script for editing a user

    var userID = $routeParams.id;

    $scope.user = UserFactory.get({id: userID}), function(){
        $scope.user = success.data;
        
    }

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





// .controller('HomeController', ['$scope', function(){

// }])
