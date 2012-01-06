define([
	
],

function(
	
) {
	//Set ValueObject
	function CountryValueObject (param) {
				
		this.getCode = function() {
			return param.code;
		};
			
		this.getTitle = function() {
			return param.title;
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
