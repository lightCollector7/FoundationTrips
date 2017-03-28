angular.module('FoundationTrips.factories', [])

.factory('UserFactory', ['$resource', function($resource) {
    return $resource('/api/users/:id', { id: '@id' }, {
        update: { method: 'PUT' }
    });      
}])

.factory('ParticipantForEvent', ['$resource', function($resource) {
    return $resource('/api/greenSlots01/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])