define([
	//Load User Aggregate Root (Model Object)
	'BC/Account/Domain/User/AggregateRoots/User'
],

function (
	UserAggregateRoot
) {
	return function () {
		
		//Define constants
		this.ACCOUNT_REPOSITORY = 'AccountUserRepository';
		
		
		this.getDto = function (args) {
			try {
				//Check if repository exists
				if (App.hasRepository(this.ACCOUNT_REPOSITORY)) {
					//Get repository
					var repository = App.getRepository(this.ACCOUNT_REPOSITORY);
					
					//Check if model does not exist in repository
					if(!App.hasModel(args.id, this.ACCOUNT_REPOSITORY)) {
						//Create model
						var model = new UserAggregateRoot({ id : args.id });

						//Store model in reporitory
						repository.add(model);
					}
					
					//Update model in repository from server
					App.getModel(args.id, this.ACCOUNT_REPOSITORY).getFromServer({
						BC : repository.BC,
						Domain : repository.DOMAIN,
						repository : repository.NAME,
						modelID : args.id
					}, args.success);
				} else {
					//Throw exception
					throw new Error('Repository "' + this.ACCOUNT_REPOSITORY + '" does not exists!');
				}
			} catch (e) {
				args.error(e);
			}
		}
	};
});