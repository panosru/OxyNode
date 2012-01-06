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
		initialize : function () {			
			//Bind Events
			//this.bind('change:Name', NameChangedAggregateRootEvent);
		},
		triggerEvents : function () {
			//Trigger events
			new NewAccountCreatedEvent(this);
		}
	});
	
	return UserAggregateRoot;
});
