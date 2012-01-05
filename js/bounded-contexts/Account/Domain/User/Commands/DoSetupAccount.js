define([
	//Get Command Handler
	'BC/Account/Domain/User/Commands/Handlers/DoSetupAccount'
],

function (
	DoSetupAccountCommandHandler
) {	
	/**
	 * @constructor
	 * 
	 * @param {String} repository
	 * @param {String|Number} realIdentifier
	 * @param {String} email
	 * @param {String} countryCode
	 * @param {String} countryTitle
	 * @param {String} languageCode
	 * @param {String} languageTitle
	 */
	function DoSetupAccountCommand(
		name,
		email,
		countryCode,
		countryTitle,
		languageCode,
		languageTitle
	) {
		//Create public Get methods
		/**
		 * @return {String}
		 */
		this.getName 			= function() {
			return name;
		};
		
		/**
		 * @return {String}
		 */
		this.getEmailAddress 	= function() {
			return email;
		};
		
		/**
		 * @return {String}
		 */
		this.getCountryCode		= function () {
			return countryCode;
		};
		
		/**
		 * @return {String}
		 */
		this.getCountryTitle	= function () {
			return countryTitle;
		};
		
		/**
		 * @return {String}
		 */
		this.getLanguageCode 	= function() {
			return languageCode;
		};
		
		/**
		 * @return {String}
		 */
		this.getLanguageTitle 	= function() {
			return languageTitle;
		};
		
		//Trigger Command Handler
		new DoSetupAccountCommandHandler(
			'AccountUserRepository',
			null,
			this
		);
	}
	
	return DoSetupAccountCommand;
});
