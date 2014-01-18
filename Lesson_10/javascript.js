// Đối tượng windows giống như biến GLOBAL
var foo = 0;
function myFunction() {
	var bar = 1;
	var foo = bar + 2;
	var foo1 = window.foo + 5;
}

myFunction();


// ----------
var surpass = confirm("Do you want to go to Google?");
if (surpass) {
	location = "http://google.com";
} else {
	location.reload(true);
}