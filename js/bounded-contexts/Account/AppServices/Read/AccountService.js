define([
	'BC/Account/Domain/User/AggregateRoots/User'
],
	
function (
	UserAggregateRoot
) {
	
	usr = UserAggregateRoot;
	
	return {
		getAccount : function (email) {
			var account = {};
			
			return account;
		}
	}
});
