/* Author: panosru

*/
function animate(selector, animation, settings_class) {
	
	//fallback on the default settings
	if ('undefined' === typeof settings_class) settings_class = 'animated';
	
	//Set private variable
	var $el = $(selector);
	
	//This check is to prevent the case when the user call the method multiple times in a row (e.g. double click in a button)
	if (
			(typeof $el.data().animating == 'undefined')
		||	(!$el.data().animating)
	) {
		//element specific annimation flag
		$el.data('animating', true);
	
		//Check if animation settings are applied to the element
		if (!$el.hasClass(settings_class)) $el.addClass(settings_class);
	
		//Check if the animation class already exist
		if ($el.hasClass(animation)) $el.removeClass(animation);
	
		//detect browser css transform
		if ('WebkitTransform' in document.body.style) {
			var _transform = '-webkit-';
		} else if ('MozTransform' in document.body.style) {
			var _transform = '-moz-';
		} else if ('OTransform' in document.body.style) {
			var _transform = '-o-';
		} else if ('MsTransition' in document.body.style) {
			var _transform = '-ms-';
		} else if ('transform' in document.body.style) {
			var _transform = '';
		}
		
		//calculate animation time
		// - get delay
		var _delay = parseInt($el.css(_transform + 'animation-delay'));
		// - get duration
		var _duration = parseInt($el.css(_transform + 'animation-duration'));
		// - get interation times
		var _iteration = parseInt($el.css(_transform + 'animation-iteration-count'));
		
		//Check for NaN values and normalize
		if (isNaN(_delay)) var _delay = 0;
		if (isNaN(_duration)) var _duration = 0;
		if (isNaN(_iteration)) var _iteration = 1; // this is set to 1 because if it is set to 0 what ever will multiple with it it will result to 0
		
		//calculate total time
		var _totalTime = _delay + (_duration * _iteration);
		
		//execute the animation
		$el.addClass(animation);
		
		//Set timeout for garbage collector
		setTimeout(function () {
			//Remove animation settings
			$el.removeClass(settings_class);
	
			//Clear animation class
			$el.removeClass(animation);
			
			//Remove flag
			$el.removeData('animating');
		}, (_totalTime * 1000)); //Convert total seconds to milliseconds	
	}
}

$(document).ready(function () {
	//Links with rel="external" will open in new window (or tab)
	$("a[rel='external']").live('click', function(event){
		event.preventDefault();
        event.stopPropagation();
        window.open(this.href, '_blank');
	});
});