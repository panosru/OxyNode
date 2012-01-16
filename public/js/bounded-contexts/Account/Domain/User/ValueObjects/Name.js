define([
	
],

function(
	
) {
	function NameValueObject (param) {
		
		var name = ('undefined' === typeof param) ? 'unknown' : param;
		
		this.getName = function() {
			return name;
		};
	}
	
	NameValueObject.prototype.toJSON = function () {
		return this.getName();
	};
	
	return NameValueObject;
});
