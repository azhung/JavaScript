// SCOPE
// shape : hình dạng
// base : cạnh đáy hình tam giác
function shapeArea(base, height, shape) {		
	var area;	
	function triangle() {
		area = (base * 0.5) * height;
	}
	
	function rectangle() {
		area = base * height;
	}
	
	switch(shape) {
		case "triangle":
			// Do something
			triangle();
			break;
		case "rectangle":
			// Do something
			rectangle();
			break;
		case "square":
			// Do something
			rectangle();
			break;
	}
	
	return area;
}