define([
	
],

function(
	
) {
	function NameValueObject (name) {
		
		var name = ('undefined' === typeof name) ? 'unknown' : name;
		
		this.getName = function() {
			return name;
		};
	}
	
	NameValueObject.prototype.toJSON = function () {
		return this.getName();
	};
	
	return NameValueObject;
});
