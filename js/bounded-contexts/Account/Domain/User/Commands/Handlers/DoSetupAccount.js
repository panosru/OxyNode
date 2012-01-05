define([
	//Get ValueObjects
	'BC/Account/Domain/User/ValueObjects/Name',
	'BC/Account/Domain/User/ValueObjects/EmailAddress',
	'BC/Account/Domain/User/ValueObjects/Country',
	'BC/Account/Domain/User/ValueObjects/Language',
	
	//Load User Aggregate Root (Model Object)
	'BC/Account/Domain/User/AggregateRoots/User'
],

function (
	NameValueObject,
	EmailAddressValueObject,
	CountryValueObject,
	LanguageValueObject,
	UserAggregateRoot
) {
	var DoSetupAccountCommandHandler = function (
		repository,
		realIdentifier,
		command
	) {
		//Check if Repository exist
		if (App.hasRepository(repository)) {
			try {
				//Create user model
				var user = new UserAggregateRoot({
					name 		: new NameValueObject(command.getName()),
					email 		: new EmailAddressValueObject(command.getEmailAddress()),
					country 	: new CountryValueObject(command.getCountryCode(), command.getCountryTitle()),
					language 	: new LanguageValueObject(command.getLanguageCode(), command.getLanguageTitle())
				});
				
				//Store User to repository
				App.getRepository(repository).add(user);
				
				//Save to server
				user.save();
			} catch (e) {
				//Trigger some error type event
				log(e);
			}
		} else {
			//Trigger some error type event
		}
	};
	
	return DoSetupAccountCommandHandler;
});
