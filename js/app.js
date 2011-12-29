define([ 'underscore', 'backbone', 'router', 'app/models/Person']

,function (_, Backbone, Router, PersonModel) {	
  	return {
    	initialize: function(){
    		
    		person = PersonModel;
    		
	    	// Pass in our Router module and call it's initialize function
	    	Router.initialize();
	  	}
  	};
});