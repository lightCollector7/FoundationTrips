angular.module('FoundationTrips.factories', [])

.factory('UserFactory', ['$resource', function($resource) {
    return $resource('/api/users/:id', { id: '@id' }, {
        update: { method: 'PUT' }
    });      
}])

.factory('GreenTripsFactory', ['$resource', function($resource) {
    return $resource('/api/GreenTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])

.factory('OrangeTripsFactory', ['$resource', function($resource) {
    return $resource('/api/OrangeTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])

.factory('PurpleTripsFactory', ['$resource', function($resource) {
    return $resource('/api/PurpleTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])

.factory('YellowTripsFactory', ['$resource', function($resource) {
    return $resource('/api/YellowTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])

.factory('GreenTripSlotsFactory', ['$resource', function($resource) {   // call this Slots ??
    return $resource('/api/GreenTripSlots/:id/', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
