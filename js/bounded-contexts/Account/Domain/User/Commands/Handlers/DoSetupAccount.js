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
					id				: 24,
					name 			: new NameValueObject(command.getName()),
					email_address 	: new EmailAddressValueObject(command.getEmailAddress()),
					country 		: new CountryValueObject({ code : command.getCountryCode(), title : command.getCountryTitle()}),
					language 		: new LanguageValueObject({ code : command.getLanguageCode(), title : command.getLanguageTitle()})
				});

				//Store User to repository
				App.getRepository(repository).add(user);
				
				//Trigger events
				user.triggerEvents();
				
				//Save to server
				//user.save();
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
