var eventUtility = {
	
	// Khai báo hàm và cho hàm chạy luôn (function(){}());
	addEvent : (function(){
		// Nếu trình duyệt hỗ trợ addEventListener
		if (typeof addEventListener !== "undefined") {
			return function (obj, evt, fn) {
				obj.addEventListener(evt, fn, false);
			};
		} 
		// Nếu trình duyệt không hỗ trợ addEventListener thì sử dụng attachEvent
		else {
			return function (obj, evt, fn) {
				obj.attachEvent("on" + evt, fn);
			};
		}
	}()),
	
	removeEvent : (function() {
		if (typeof addEventListener !== "undefined") {
			return function (obj, evt, fn) {
				obj.removeEventListener(evt, fn, false);
			};
		} else {
			return function (obj, evt, fn) {
				obj.detachEvent("on" + evt, fn);
			};
		}
	}())
	
}