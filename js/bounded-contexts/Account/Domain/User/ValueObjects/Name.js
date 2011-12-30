define([
	
],

function(
	
) {
	var NameValueObject = function (name) {
		
		//Validate
		
		//Set
		this.name = ('undefined' === typeof name) ? 'unknown' : name;
		
		if (!NameValueObject._prototyped) {
			NameValueObject.prototype.getName = function() {
				return this.name;
			};

			NameValueObject._prototyped = true;
		}
	}
	
	return NameValueObject;
});
