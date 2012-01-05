define([
	//Get libraries
	'backbone',
	
	//Get User Events
	'BC/Account/Domain/User/AggregateRoots/User/Event/NewAccountCreated'
],

function (
	Backbone,
	NewAccountCreatedEvent
) {
	
	var UserAggregateRoot = Backbone.Model.extend({
		url : '/api/user',
		initialize : function () {
			//Trigger events
			new NewAccountCreatedEvent(this);
			
			//Bind Events
			//this.bind('change:Name', NameChangedAggregateRootEvent);
		}
	});
	
	return UserAggregateRoot;
});
