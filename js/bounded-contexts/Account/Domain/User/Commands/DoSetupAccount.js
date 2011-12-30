define([
	//Get Command Handler
	'BC/Account/Domain/User/Commands/Handlers/DoSetupAccount',
	
	//Get User Events
	'BC/Account/Domain/User/AggregateRoots/User/Event/NameChanged'
],

function (
	DoSetupAccountCommandHandler,
	NameChangedAggregateRootEvent
) {
	var DoSetupAccountCommand = function (User, Params) {
		
		//Convert object properties to ValueObjects
		User.setUserEmailAddress(Params.EmailAddress);
		User.setUserName(Params.Name);
		User.setUserCountry(Params.CountryCode, Params.CountryTitle);
		User.setUserLanguage(Params.LanguageCode, Params.LanguageTitle);
		
		
		//Trigger DoSetupAccount Command Handler
		new DoSetupAccountCommandHandler(User);
		
		//Bind Events
		User.bind('change:Name', NameChangedAggregateRootEvent);
	};
	
	return DoSetupAccountCommand;
});
