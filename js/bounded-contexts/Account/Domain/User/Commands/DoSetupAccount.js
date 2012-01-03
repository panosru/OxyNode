define([
	'underscore',
	
	//Load User Aggregate Root (Model Object)
	'BC/Account/Domain/User/AggregateRoots/User',
	
	//Get Command Handler
	'BC/Account/Domain/User/Commands/Handlers/DoSetupAccount'
],

function (
	_,
	UserAggregateRoot,
	DoSetupAccountCommandHandler
) {
	function DoSetupAccountCommand(
		repository,
		realIdentifier,
		name
	) {
		//Check if Repository exist
		if (App.hasRepository(repository)) {
			
			var newUser = new UserAggregateRoot({
				id 		: realIdentifier,
				name 	: name
			});
			
			
			log(newUser);
			log('Create user: ' + newUser.get('name'));
		
			//Trigger handlers
			//DoSetupAccountCommandHandler();
		} else {
			//Trigger some error type event
		}
	}
	
	return DoSetupAccountCommand;
});
