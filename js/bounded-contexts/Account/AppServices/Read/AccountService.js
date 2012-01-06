define([
	'BC/Account/Domain/User/Query/AccountInformation'
],
	
function (
	AccountInformationDto
) {
	return {
		routes : {
			'user/get/:id'	: 'getAccount'
		},
		
		getAccount : function (id) {
			var information = new AccountInformationDto();
			
			information.getDto({
				id : id,
				success : function (model) {
					log(model.get('name').getName());
				},
				error : function (e) {
					//Error action
					log(e);
				}
			});
		}
	}
});
