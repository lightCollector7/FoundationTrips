angular.module('FoundationTrips.services', [])
.service('UserService', ['$http', '$location', '$route', '$routeParams', function($http, $location, $route, $routeParams) {

    var user;

    this.isLoggedIn = function() {
        if (user) {
            console.log(user);
            return true;
            
        } else {
            return false;
        }
    }

    this.requireLogin = function() {
        if (!this.isLoggedIn()) {
            var current = $location.path();
            $location.path('/login').search('p', current).replace();
        }
    }


    this.isAdmin = function() {
        // if (user && user.role === 'admin') {
        //     return true;
        // } else {
        //     return false;
        // }
        return this.me().then(function(me) {
            if (me.role === 'admin') {
                return true;
            } else {
                return false;
            }
        })
    }

    this.isMyProfile = function(){
        return this.me().then(function(me){
            var profileID = $routeParams.id;
            console.log(profileID)
            console.log(me.id);
            if (me.id == profileID){
                console.log('isMyProfile is true')
                return true;
            }else if(me.role === 'admin') {
                console.log('isMyProfile is true');
                return true;
            }else {
                console.log('isMyProfile is false');
                return false;
            }
        })
    }

    this.requireIsMyProfile = function(){
            return this.isMyProfile().then(function(iAmMe) {
            if (!iAmMe) { // if the profile is not mine
                alert('Denied Access: unauthorized user');
                $location.path('/').replace();
            }
        }, function(err) { // if there was an error getting 'me' (AKA, the user is not logged in with a session on the server)
            alert('You must be an admin to access this page.');
            $location.path('/').replace();
        });

        // if(!this.isAdmin()) {
        //     $location.path('/posts').replace();
        // }
    
    }

    this.requireAdmin = function() {
        return this.isAdmin().then(function(userIsAnAdmin) {
            if (!userIsAnAdmin) { // if the user is not an admin
                alert('You must be an admin to access this page.');
                $location.path('/posts').replace();
            }
        }, function(err) { // if there was an error getting 'me' (AKA, the user is not logged in with a session on the server)
            alert('You must be an admin to access this page.');
            $location.path('/posts').replace();
        });

        // if(!this.isAdmin()) {
        //     $location.path('/posts').replace();
        // }
    }

    this.login = function(e, p) {
        return $http({
            method: 'POST',
            url: '/api/users/login',
            data: {
                email: e,    //passing username now instead of email
                password: p
            }
        }).then(function(success) {
            user = success.data;
            return success.data;
            })
    }

    this.logout = function() {
        return $http({
            method: 'GET',
            url: '/api/users/logout'
        }).then(function(success) {
            user = undefined;
        });
    }


    this.me = function() {
            if (user) {
                return Promise.resolve(user);
            } else {
                return $http({
                    method: 'GET',
                    url: '/api/users/me'
                }).then(function(success) {
                    user = success.data;
                    return success.data;
                })
            }
        }



}]);