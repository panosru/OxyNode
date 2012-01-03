define([ 
	'underscore', 
	'backbone',
	
	//Get application services
	'BC/Account/AppServices/Write/AccountService' 
],

function(
	_, 
	Backbone,
	AccountWriteService
) {
	//Create base router
	var RouterObject = {
		routes : {}
	};
	
	//Merge base router with application services without override defaults
	
	//Merge routes
	_.defaults(RouterObject.routes,
		AccountWriteService.routes
	);
	
	//Merge actions
	_.defaults(RouterObject,
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