angular.module('FoundationTrips.factories', [])

.factory('UserFactory', ['$resource', function($resource) {
    return $resource('/api/users/:id', { id: '@id' }, {
        update: { method: 'PUT' }
    });      
}])

.factory('AdminTripFactory', ['$resource', function($resource) {
    return $resource('/api/AdminTrips/:id', {id: '@id'}, {
        update: {method: 'PUT'}
    })
}])
.factory('CurrentGreenTripsFactory', ['$resource', function($resource) {
    return $resource('/api/CurrentGreenTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])

.factory('CurrentOrangeTripsFactory', ['$resource', function($resource) {
    return $resource('/api/CurrentOrangeTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])

.factory('CurrentPurpleTripsFactory', ['$resource', function($resource) {
    return $resource('/api/CurrentPurpleTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])

.factory('CurrentYellowTripsFactory', ['$resource', function($resource) {
    return $resource('/api/CurrentYellowTrips/:id', {id: '@id' }, {
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
.factory('UpdateSlotFactory', ['$resource', function($resource){
    return $resource('api/AdminTripSlots/slot/:id/', {id: '@id' }, {
    update: {method: 'PUT' }
    })
}])

.factory('AdminUserFactoryGreen', ['$resource', function($resource) {    // write this
    return $resource('api/AdminUsers/GreenUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])
.factory('AdminUserFactoryOrange', ['$resource', function($resource) {    // write this
    return $resource('api/AdminUsers/OrangeUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])
.factory('AdminUserFactoryPurple', ['$resource', function($resource) {    // write this
    return $resource('api/AdminUsers/PurpleUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])
.factory('AdminUserFactoryYellow', ['$resource', function($resource) {    // write this
    return $resource('api/AdminUsers/YellowUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])


//====================================================================
 
