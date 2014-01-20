var eventUtility = {
	// Xay dung ham addEvent
	addEvent : (function(){
		// Neu trinh duyet ho tro addEventListener
		if (typeof addEventListener !== "undefined") {
			return function(obj, evt, fn) {
				obj.addEventListener(evt, fn, false);
			};
		} else { // Neu trinh duyet khong ho tro addEventListener
			return function(obj, evt, fn) {
				obj.attachEvent("on" + evt, fn);
			};
		}
		
	}()),
	
	// Xay dung ham getTarget
	getTarget : (function(){
		// Neu trinh duyet bac cao
		if (typeof addEventListener !== "undefined") {
			return function(event) {
				// Tra ve doi tuong duoc chon
				return event.target;
			};
		} else { // Trinh duyet cu
			return function(event) {
				// Tra ve doi tuong (Thanh phan) duoc chon
				return event.srcElement;
			};
		}
		
	}())
	
}