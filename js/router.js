define([ 'underscore', 'backbone' ],

function(_, Backbone) {
  var AppRouter = 	Backbone.Router.extend({

	  routes: {
	    "help":                 "help",    // #help
	    "search/:query":        "search",  // #search/kiwis
	    "search/:query/p:page": "search",   // #search/kiwis/p7
		'do/*action': 			'actions'
	  },

	actions: function (acts) {
		log(acts);
	},

	  help: function() {
	    log('help!');
	  },

	  search: function(query, page) {
	    log('search: '+query+' In page: '+page);
	  }

	});

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});