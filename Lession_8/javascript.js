// Sử dụng đối tượng trong javascript
// Cách 1
var person = {
	firstName : "Hoang",
	lastName : "Hung",
	
	getFullName : function () {
		return "Hello!" + this.firstName + " " + this.lastName;
	}
	
};

// document.write(person.getFullName());

// Cách 2 : Sử dụng thường xuyên hơn
function Person(firstName, lastName) {
	var firstName, lastName;
	this.firstName = firstName;
	this.lastName = lastName;
	
	this.getFullName = function () {
		return this.firstName + " " + this.lastName;
	}
	
	this.greet = function () {
		return "Hello! " + this.getFullName();
	}
	
	this.greetPer = function (per) {
		return "Hello! " + per.getFullName();
	}
	
}

var person_1 = new Person("Hoang", "Hung");
var person_2 = new Person("Anh", "Hung");
document.write(person_1.greet());
document.write(person_1.greetPer(person_2));