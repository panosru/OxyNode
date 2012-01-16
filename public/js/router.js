define([ 
	'underscore', 
	'backbone',
	
	//Get application read services
	'BC/Account/AppServices/Read/AccountService',
		
	//Get application write services
	'BC/Account/AppServices/Write/AccountService' 
],

function(
	_, 
	Backbone,
	AccountReadService,
	AccountWriteService
) {
	//Create base router
	var RouterObject = {
		routes : {}
	};
	
	//Merge base router with application services without override defaults
	
	//Merge routes
	_.defaults(RouterObject.routes,
		AccountReadService.routes,
		AccountWriteService.routes
	);
	
	//Merge actions
	_.defaults(RouterObject,
		AccountReadService,
		AccountWriteService
	);
	
	var AppRouter = Backbone.Router.extend(RouterObject);
	
	function initialize() {
		//Initiate router object
    	new AppRouter;
    	
    	//Start history
    	Backbone.history.start();
  	};

  	return {
    	initialize: initialize
  	};
});