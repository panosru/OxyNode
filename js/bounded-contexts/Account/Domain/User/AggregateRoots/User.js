define([
	//Get libraries
	'underscore', 
	'backbone',
	
	//Get ValueObjects
	'BC/Account/Domain/User/ValueObjects/EmailAddress',
	'BC/Account/Domain/User/ValueObjects/Name',
	'BC/Account/Domain/User/ValueObjects/Country',
	'BC/Account/Domain/User/ValueObjects/Language',
	
	//Get Commands
	'BC/Account/Domain/User/Commands/DoSetupAccount',
	
	//Get User Events
	'BC/Account/Domain/User/AggregateRoots/User/Event/NameChanged'
],

function (
	_,
	Backbone,
	EmailAddressValueObject,
	NameValueObject,
	CountryValueObject,
	LanguageValueObject,
	DoSetupAccountCommand,
	NameChangedAggregateRootEvent
) {
	
	var UserAggregateRoot = Backbone.Model.extend({
		
		initialize : function (params) {
			//Convert object properties to ValueObjects
			this.id = params.id;
			this.setUserEmailAddress(params.EmailAddress);
			this.setUserName(params.Name);
			this.setUserCountry(params.CountryCode, params.CountryTitle);
			this.setUserLanguage(params.LanguageCode, params.LanguageTitle);
			
			
			//Trigger DoSetupAccount Command Handler
			//new DoSetupAccountCommandHandler(User);
			
			//Bind Events
			this.bind('change:Name', NameChangedAggregateRootEvent);
		},
		
		setUserEmailAddress : function (email) {
			this.set({EmailAddress : new EmailAddressValueObject(email)});
		},
		
		setUserName : function (name) {
			this.set({Name : new NameValueObject(name)});
		},
		
		setUserCountry : function (code, title) {
			this.set({Country : new CountryValueObject(code, title)});
		},
		
		setUserLanguage : function (code, title) {
			this.set({Language : new LanguageValueObject(code, title)});
		}
	});
	
	return UserAggregateRoot;
});
