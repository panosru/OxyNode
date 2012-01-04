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
	
	LanguageValueObject.prototype.toJSON = function () {
		return {
			code : this.getCode(),
			title : this.getTitle()
		};
	};
	
	return LanguageValueObject;
});
