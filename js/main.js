require.config({
	baseUrl: 'js',
	paths: {
		//RequireJS plugins
		'order'		: 'libs/Require/plugins/require-order',
		'text'		: 'libs/Require/plugins/require-text',
		'i18n'		: 'libs/Require/plugins/require-i18n',
		'domReady'	: 'libs/Require/plugins/require-domReady',
		
		//Libs
		'underscore': 'libs/Underscore/underscore-1.2.3',
		'backbone'	: 'libs/Backbone/backbone-0.5.3',
		
		//Path mappings
		'templates'	: '../templates',
		'BC'		: 'bounded-contexts'
	},
	packages: [
		{
			name : 'moment',
			location: '../node_modules/moment',
			main : 'moment'
		},
		{
			name : 'money',
			location : '../node_modules/money',
			main : 'money'
		}
	],
	priority: ['order','text','i18n'],
	deps: ['domReady']
});

require([	
	// Load our app module and pass it to our definition function
	'domReady','app'
], function (domReady, App) {
	// The "app" dependency is passed in as "App"
	// Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
	domReady(function () {
		App.initialize();
	});
});