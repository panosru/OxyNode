define([ 
	'underscore', 
	'backbone', 
	'router', 
	'BC/Account/AppServices/Write/AccountService'
]

,function (
	_, 
	Backbone, 
	Router, 
	AccountWriteService
) {	
  	return {
    	initialize: function(){
    		
    		//person = PersonModel;
    		
	    	// Pass in our Router module and call it's initialize function
	    	Router.initialize();
	  	}
  	};
});