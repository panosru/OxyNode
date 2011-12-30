define([
	
],

function(
	
) {
	var LanguageValueObject = function (code, title) {
		
		//Validate
		
		//Set
		this.code = code;
		this.title = title;
		
		if (!LanguageValueObject._prototyped) {
			LanguageValueObject.prototype.getCode = function() {
				return this.code;
			};
			
			LanguageValueObject.prototype.getTitle = function() {
				return this.title;
			};

			LanguageValueObject._prototyped = true;
		}
		
	}
	
	return LanguageValueObject;
});
