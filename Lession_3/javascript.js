// Có 3 cách khai báo Functions trong javascript
// -------------
// Cách 1
function getGreeting(firstName, lastName) {
	var greeting = "Hello, "+firstName + " " + lastName + "!";
	return greeting;
}

var message = getGreeting("John", "Doe");
alert(message);

// Cách 2

var getGreeting = function (firstName, lastName) {
	var greeting = "Hello, I'm "+firstName+"  "+lastName;
	return greeting;
}
var message = getGreeting("Hoang", "Hung");
alert(message);

// Cách 3: Xây dựng hàm và khởi tạo giá trị cho hàm luôn

var getGreeting = (function(firstName, lastName){

	var greeting = "Hello, I'm "+firstName+" "+lastName;
	return greeting;
	
})("Hoang", "Hung"); // Khởi tạo giá trị cho hàm luôn

alert(getGreeting);



