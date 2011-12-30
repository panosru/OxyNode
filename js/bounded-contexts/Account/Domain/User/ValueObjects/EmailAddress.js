define([
	
],

function(
	
) {
	var EmailAddressValueObject = function (emailAddress) {
		
		//Validate
		
		//Set
		this.EmailAddress = emailAddress;
		
		if (!EmailAddressValueObject._prototyped) {
			EmailAddressValueObject.prototype.getEmail = function() {
				return this.EmailAddress;
			};

			EmailAddressValueObject._prototyped = true;
		}
		
	}
	
	return EmailAddressValueObject;
});
