define([
	'underscore',
	'backbone',
	'router',
	'repository'
]

,function (
	_,
	Backbone,
	Router,
	Repository
) {
	//Add some extra methods to string prototype

	//Underscore to cammel case, for example: 'foo_bar' => FooBar
	String.prototype.underscoreToCamelCase = function() {
		return this
			.trim()
			.replace(/(\_[a-z])/g, function($1){return $1.toUpperCase().replace('_','');})
			.replace(/^[a-z]/, function ($1) {return $1.toUpperCase()})
		;
	};
	
	//Dash to cammel case, for example: 'foo-bar' => FooBar
	String.prototype.dashToCamelCase = function() {
		return this
			.trim()
			.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');})
			.replace(/^[a-z]/, function ($1) {return $1.toUpperCase()})
		;
	};
	
	//Cammel case to underscore, for example: 'FooBar' => foo_bar
	String.prototype.camelCaseToUnderscore = function () {
		return this
			.trim()
			.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();})
			.substr(1)
		;
	}
	
	//Cammel case to dash, for example: 'FooBar' => foo-bar
	String.prototype.camelCaseToDash = function () {
		return this
			.trim()
			.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();})
			.substr(1)
		;
	}
	
	//Override some Backbone methods	
	
	//Override Backbone.Model.prototype.toJSON in order to get values from ValueObjects
	Backbone.Model.prototype.toJSON = function() {
		var tmpObj = _.clone(this.attributes);
		_.each(tmpObj, function (value, key) { 
			//Skip certain keys
			if (!_.any(['id'], function (val) {
			    return val === key;
			})) {
				//Check if value is Value object
				if ((key.underscoreToCamelCase() + 'ValueObject') === (/function (.{1,})\(/.exec(value.constructor.toString())[1])) {
					eval('tmpObj.'+key+' = value.toJSON();');
				} else {
					log (key + ' is not a value object');
				}
			}
		});
		return tmpObj;
    };

	//Extend Backbone.Model with getFromServer method which fetch data from server and convert propertis to ValueObjects
	Backbone.Model.prototype.getFromServer = function (options, callback) {
		this.fetch({
			success : function (model, resp) {
				_.each(resp, function (value, key) {
					//Skip certain keys
					if (!_.any(['id'], function (val) {
					    return val === key;
					})) {
						//Get value object
						var ValueObject = require('BC/' + options.BC + '/Domain/' + options.Domain + '/ValueObjects/' + key.underscoreToCamelCase());
						//Update model in repository
						eval('App.getRepository("' + options.repository + '").get(' + options.modelID + ').set({ ' + key + ' : new ValueObject(value) });');
					}
				});
				
				callback(eval('App.getRepository("' + options.repository + '").get(' + options.modelID + ')'));
			}
		});
	}
	
	//Extend Backbone.Collection with getFromServer method which fetch data from server and convert propertis to ValueObjects
	Backbone.Collection.prototype.getFromServer = function (options, callback) {
		var current_collection = this;
		current_collection.fetch({
			success : function (collection, resp) {
				_.each(resp, function (model) {
					_.each(model, function (value, key) {
						//Skip certain keys
						if (!_.any(['id'], function (val) {
						    return val === key;
						})) {
							//Get value object
							var ValueObject = require('BC/' + current_collection.BC + '/Domain/' + current_collection.DOMAIN + '/ValueObjects/' + key.underscoreToCamelCase());
							//Update model in repository
							eval('App.getRepository("' + current_collection.NAME + '").get(' + model.id + ').set({ ' + key + ' : new ValueObject(value) });');
						}
					});
				});
			}
		});
	}
	
	/**
	 * @constructor
	 * @this {Application}
	 */
	function Application () {
		
		/**
		 * Application Repositories
		 * @type object
		 */
		this.repositories = Repository;
		
		/**
		 * Initialize method
		 */
		this.initialize = function() {
	    	// Pass in our Router module and call it's initialize function
	    	Router.initialize();
	  	}
	  	
		/**
		 * Check if repository exists
		 * @param {string} repository
		 */
		this.hasRepository = function (repository) {
			if ('object' === typeof this.repositories) {
				return this.repositories.hasOwnProperty(repository);
			} else return false;
		};
		
		/**
		 * Get Repository
		 * @param {string} repository
		 */
		this.getRepository = function (repository) {
			if ('string' === typeof repository) {
				return _.values(this.repositories)[_.indexOf(_.keys(this.repositories), repository)];
			} else throw new Error('Only string is allowed to be passed, type of "' + typeof repository + '" given!');
		};
		
		/**
		 * Check if model exist in repository
		 * @param {string} realIdentifier
		 * @param {string} repository
		 * @param {boolean} useCID
		 */
		this.hasModel = function (realIdentifier, repository, useCID) {
			//first check if repository exist
			if (this.hasRepository(repository)) {
				useCID = useCID || false;
				var tmpRepository = this.getRepository(repository);
				
				if (useCID) {
					var tmpResults = tmpRepository.getByCid(realIdentifier);
				} else var tmpResults = tmpRepository.get(realIdentifier);
				
				delete tmpRepository;
				
				if ('undefined' !== typeof tmpResults) {
					delete tmpResults;
					return true;
				} else {
					delete tmpResults;
					return false;
				}
				
			} else throw new Error('Repository "' + repository + '" does not exist!');
		};
		
		/**
		 * Get Model from repository
		 * @param {string} realIdentifier
		 * @param {string} repository
		 * @param {boolean} useCID
		 */
		this.getModel = function (realIdentifier, repository, useCID) {
			useCID = useCID || false;
			
			//first check if repository exist
			if (this.hasModel(realIdentifier, repository, useCID)) {
				var tmpRepository = this.getRepository(repository);
				
				if (useCID) {
					var Model = tmpRepository.getByCid(realIdentifier);
				} else var Model = tmpRepository.get(realIdentifier);
				
				delete tmpRepository;
				
				return Model;
				
			} else throw new Error('Model with ID : "' + realIdentifier + '" does not exist in "' + repository + '" Repository!');
		};
	}
	
	//Make it global
	App = new Application();
		
	return App.initialize;
});