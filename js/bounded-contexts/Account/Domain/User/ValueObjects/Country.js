define([
	
],

function(
	
) {
	//Set ValueObject
	function CountryValueObject (code, title) {
				
		this.getCode = function() {
			return code;
		};
			
		this.getTitle = function() {
			return title;
		};		
	}
	
	return CountryValueObject;
});
