var eventUtility = {
	
	addEvent : (function(){
		if (typeof addEventListener !== "undefined") {
			return function(obj, evt, fn) {
				obj.addEventListener(evt, fn, false);
			};
		} else {
			return function(obj, evt, fn) {
				obj.attachEvent("on" + evt, fn);
			};
		}
	}()),
	
	getTarget : (function() {
		if (typeof addEvenListener !== "undefined") {
			return function(event) {
				return event.target;
			};
		} else {
			return function(event) {
				return event.srcElement;
			};
		}
	}())
	
}