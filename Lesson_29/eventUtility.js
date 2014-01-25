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
	}())
	
}