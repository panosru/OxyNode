define([
	
],

function(
	
) {
	function EmailAddressValueObject (EmailAddress) {
		
		this.getEmail = function() {
			return EmailAddress;
		};
	}
	
	return EmailAddressValueObject;
});
