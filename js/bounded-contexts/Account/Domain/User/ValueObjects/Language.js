define([
	
],

function(
	
) {
	function LanguageValueObject (code, title) {
		
		this.getCode = function() {
			return code;
		};
			
		this.getTitle = function() {
			return title;
		};
	}
	
	return LanguageValueObject;
});
