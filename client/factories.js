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
.factory('FutureGreenTripsFactory', ['$resource', function($resource) {
    return $resource('/api/FutureGreenTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('FutureOrangeTripsFactory', ['$resource', function($resource) {
    return $resource('/api/FutureOrangeTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('FuturePurpleTripsFactory', ['$resource', function($resource) {
    return $resource('/api/FuturePurpleTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('FutureYellowTripsFactory', ['$resource', function($resource) {
    return $resource('/api/FutureYellowTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('CurrentRainbowTripsFactory', ['$resource', function($resource) {
    return $resource('/api/CurrentRainbowTrips/:id', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('FutureRainbowTripsFactory', ['$resource', function($resource) {
    return $resource('/api/FutureRainbowTrips/:id', {id: '@id' }, {
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
.factory('RainbowTripSlotsFactory', ['$resource', function($resource) {   
    return $resource('/api/RainbowTripSlots/:id/', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}])
.factory('RainbowTripFilledSlotsFactory', ['$resource', function($resource) {  
    return $resource('/api/RainbowTripSlots/mySlot/:userID/:eventID/:slotID', {id: '@id' }, {
        update: {method: 'PUT' }
    });
}]) 
.factory('UpdateSlotFactory', ['$resource', function($resource){
    return $resource('api/AdminTripSlots/slot/:id/', {id: '@id' }, {
    update: {method: 'PUT' }
    })
}])
.factory('AdminParticipantSignUpFactory', ['$resource', function($resource){
    return $resource('api/AdminTripSlots/:id', {id: '@id' }, {
    update: {method: 'PUT' }
    })
}])
.factory('AdminUserFactory', ['$resource', function($resource) {  
    return $resource('api/AdminUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])
//WORKING HERE!!
.factory('AdminParticipantFactory', ['$resource', function($resource) {    
    return $resource('api/AdminUsers/Participant/', {id: '@id'}, {
        update: {method: 'PUT'}
    });
}])
.factory('AdminUserFactoryGreen', ['$resource', function($resource) {    
    return $resource('api/AdminUsers/GreenUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])
.factory('AdminUserFactoryOrange', ['$resource', function($resource) {   
    return $resource('api/AdminUsers/OrangeUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])
.factory('AdminUserFactoryPurple', ['$resource', function($resource) {  
    return $resource('api/AdminUsers/PurpleUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])
.factory('AdminUserFactoryYellow', ['$resource', function($resource) {   
    return $resource('api/AdminUsers/YellowUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])
.factory('AdminUserFactoryAdmin', ['$resource', function($resource) {  
    return $resource('api/AdminUsers/AdminUsers/:id/', {id: '@id' },{
        update: {method: 'PUT'}
    });
}])
.factory('UserTripFactory', ['$resource', function($resource){
    return $resource('api/UserTrips/:id', {id: '@id'},{
        update: {method: 'PUT'}
    });
}])



//====================================================================
 
