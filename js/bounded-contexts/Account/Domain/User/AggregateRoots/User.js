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
	'BC/Account/Domain/User/Commands/DoSetupAccount'
],

function (
	_,
	Backbone,
	EmailAddressValueObject,
	NameValueObject,
	CountryValueObject,
	LanguageValueObject,
	DoSetupAccountCommand
) {
	
	var UserAggregateRoot = Backbone.Model.extend({
		
		initialize : function (params) {
			new DoSetupAccountCommand(this, params);
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
