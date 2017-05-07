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

.factory('GreenTripSlotsFactory', ['$resource', function($resource) {   
    return $resource('/api/GreenTripSlots/:id/', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('GreenTripFilledSlotsFactory', ['$resource', function($resource) {  
    return $resource('/api/GreenTripSlots/mySlot/:userID/:eventID/:slotID', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}]) 

.factory('OrangeTripSlotsFactory', ['$resource', function($resource) {   
    return $resource('/api/OrangeTripSlots/:id/', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('OrangeTripFilledSlotsFactory', ['$resource', function($resource) {  
    return $resource('/api/OrangeTripSlots/mySlot/:userID/:eventID/:slotID', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}]) 
.factory('PurpleTripSlotsFactory', ['$resource', function($resource) {   
    return $resource('/api/PurpleTripSlots/:id/', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('PurpleTripFilledSlotsFactory', ['$resource', function($resource) {  
    return $resource('/api/PurpleTripSlots/mySlot/:userID/:eventID/:slotID', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}]) 
.factory('YellowTripSlotsFactory', ['$resource', function($resource) {   
    return $resource('/api/YellowTripSlots/:id/', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('YellowTripFilledSlotsFactory', ['$resource', function($resource) {  
    return $resource('/api/YellowTripSlots/mySlot/:userID/:eventID/:slotID', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}]) 
 
