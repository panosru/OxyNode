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
	
	CountryValueObject.prototype.toJSON = function () {
		return {
			code : this.getCode(),
			title : this.getTitle()
		};
	};
	
	return CountryValueObject;
});
