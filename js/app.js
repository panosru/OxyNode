define([ 
	'underscore', 
	'backbone', 
	'router', 
	'BC/Account/AppServices/Read/AccountService'
]

,function (
	_, 
	Backbone, 
	Router, 
	AccountReadService
) {	
  	return {
    	initialize: function(){
    		
    		//person = PersonModel;
    		ars = AccountReadService;
    		
	    	// Pass in our Router module and call it's initialize function
	    	Router.initialize();
	  	}
  	};
});