define([
	//Get Event Handlers
	'BC/Account/Domain/User/EventHandlers/Logger'
],
	
function (
	Logger
) {
	return function (User) {
		log('Created user: ' + User.get('name').getName());
		
		//Trigger Event Handlers
		new Logger();
	};
});
