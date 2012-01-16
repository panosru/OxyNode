define([
	
],

function(
	
) {
	function LanguageValueObject (param) {
		
		this.getCode = function() {
			return param.code;
		};
			
		this.getTitle = function() {
			return param.title;
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
