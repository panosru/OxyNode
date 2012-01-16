define([ 
	'backbone'
]

,function (
	Backbone
) {	
  	return Backbone.Collection.extend({
  		url 	: '/api/user',
		BC		: 'Account',
		DOMAIN	: 'User',
		NAME	: 'AccountUserRepository',
		
		//Sort models in collection (Repository) by their ID
		comparator : function(model) { return model.id;}
  	});
});