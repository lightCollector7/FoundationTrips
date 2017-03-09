angular.module('FoundationTrips.factories', [])

.factory('UserFactory', ['$resource', function($resource) {
    return $resource('/api/users/:id', { id: '@id' }, {
        update: { method: 'PUT' }
    });      
}])