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
	//Override some Backbone methods
	
	//Override Backbone.Model.prototype.toJSON in order to get values from ValueObjects
	Backbone.Model.prototype.toJSON = function() {
		var tmpObj = _.clone(this.attributes);
		_.each(tmpObj, function (value, key) { eval('tmpObj.'+key+' = value.toJSON();') });
		return tmpObj;
    }; 
	
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
			} else throw 'Only string is allowed to be passed, type of "' + typeof repository + '" given!';
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
				
			} else throw 'Repository "' + repository + '" does not exist!';
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
				
			} else throw 'Model "' + realIdentifier + '" does not exist in "' + repository + '" Repository!';
		};
	}
	
	//Make it global
	App = new Application();
		
	return App.initialize;
});