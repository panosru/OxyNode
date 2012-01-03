define([
	//Get Commands
	'BC/Account/Domain/User/Commands/DoSetupAccount'
],
	
function (
	DoSetupAccountCommand
) {
	return {
		routes : {
			'user/create/:name' : 'DoSetupAccount'
		},
		
		DoSetupAccount : function (name) {
			DoSetupAccountCommand(
				'AccountUserRepository',
				1,
				name
			);
		}
	};
});