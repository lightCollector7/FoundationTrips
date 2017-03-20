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

.controller('EventsController', ['$scope', '$location', '$route', '$http', 'UserService', function($scope, $location, $route, $http, UserService) {
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
        $scope.greenEventsArray = success.data;
        console.log('this is the greenEventsArray: ');
        console.log($scope.greenEventsArray);
        console.log('this is greenEventsArray[0]: ')
        console.log($scope.greenEventsArray[0]);
    }, function(err) {
        console.log(err);
    });

     $http({
        method: 'GET',
        url: '/api/allOrangeEvents'
    }).then(function(success){
        // console.log(success.data);
        $scope.orangeEventsArray = success.data;
        console.log('this is the orangeEventsArray: ');
        console.log($scope.orangeEventsArray);
        console.log('this is orangeEventsArray[0]: ')
        console.log($scope.orangeEventsArray[0]);
    }, function(err) {
        console.log(err);
    });

     $http({
        method: 'GET',
        url: '/api/allPurpleEvents'
    }).then(function(success){
        // console.log(success.data);
        $scope.purpleEventsArray = success.data;
        console.log('this is the purpleEventsArray: ');
        console.log($scope.purpleEventsArray);
        console.log('this is purpleEventsArray[0]: ')
        console.log($scope.purpleEventsArray[0]);
    }, function(err) {
        console.log(err);
    });

     $http({
        method: 'GET',
        url: '/api/allYellowEvents'
    }).then(function(success){
        // console.log(success.data);
        $scope.yellowEventsArray = success.data;
        console.log('this is the yellowEventsArray: ');
        console.log($scope.yellowEventsArray);
        console.log('this is yellowEventsArray[0]: ')
        console.log($scope.yellowEventsArray[0]);
    }, function(err) {
        console.log(err);
    });

    

    // Setup Modal onClick Events here 




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