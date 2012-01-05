define([
	
],

function(
	
) {
	function EmailAddressValueObject (EmailAddress) {
		
		this.getEmailAddress = function() {
			return EmailAddress;
		};
	}
	
	EmailAddressValueObject.prototype.toJSON = function () {
		return this.getEmailAddress();
	};
	
	return EmailAddressValueObject;
});