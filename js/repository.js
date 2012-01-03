define([ 
	'underscore',
	
	//Get Repositories
	'BC/Account/Repositories/User'
]

,function (
	_,
	AccountUserRepository
) {
	//Set repositories to be initialized
	return {
		AccountUserRepository : new AccountUserRepository()
	}
});