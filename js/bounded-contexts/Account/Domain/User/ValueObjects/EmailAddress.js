define([
	
],

function(
	
) {
	function EmailAddressValueObject (param) {
		
		this.getEmailAddress = function() {
			return param;
		};
	}
	
	EmailAddressValueObject.prototype.toJSON = function () {
		return this.getEmailAddress();
	};
	
	return EmailAddressValueObject;
});