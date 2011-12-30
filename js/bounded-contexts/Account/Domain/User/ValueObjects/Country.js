define([
	
],

function(
	
) {
	var CountryValueObject = function (code, title) {
		
		//Validate
		
		//Set
		this.code = code;
		this.title = title;
		
		if (!CountryValueObject._prototyped) {
			CountryValueObject.prototype.getCode = function() {
				return this.code;
			};
			
			CountryValueObject.prototype.getTitle = function() {
				return this.title;
			};

			CountryValueObject._prototyped = true;
		}
		
	}
	
	return CountryValueObject;
});
