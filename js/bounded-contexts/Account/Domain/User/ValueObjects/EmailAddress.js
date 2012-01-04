define([
	
],

function(
	
) {
	function EmailAddressValueObject (EmailAddress) {
		
		this.getEmail = function() {
			return EmailAddress;
		};
	}
	
	EmailAddressValueObject.prototype.toJSON = function () {
		return this.getEmail();
	};
	
	return EmailAddressValueObject;
});
