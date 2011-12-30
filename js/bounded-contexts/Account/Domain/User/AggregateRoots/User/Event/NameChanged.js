define([
	
],
	
function (
	
) {
	return function (User) {
		log('Changed name to ' + User.get('Name').getName());
	};
});
