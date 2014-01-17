// Đối tượng Person có hai thuộc tính firstName , lastName và phương thức getFullName;
function Person() {
	var firstName = "";
	var lastName = "";	
	
	this.setFirstName = function(name) {
		this.firstName = name;
	};
	
	this.getFirstName = function() {
		return this.firstName;
	};
	
	this.setLastName = function(name) {
		this.lastName = name;
	};
	
	this.getLastName = function() {
		return this.lastName;
	};
	
}
// Phương thức getFullName của đối tượng Person.
Person.prototype.getFullName = function() {
	return this.getFirstName() + " " +this.getLastName();
};

// Đối tượng Employee Inheritance
function Employee() {
	var firstName = "";
	var lastName = "";
	var position = "";
	// Khoi tao doi tuong Employee
	Person.call(this, firstName, lastName);
	
	this.setPosition = function(position) {
		this.position = position;
	}
	
	this.getPosition = function() {
		return this.position;
	}
	
}

Employee.prototype.getFullName = function() {
	var fullName = Person.prototype.getFullName.call(this);
	return fullName + ", " + this.position;
};

var employee1 = new Employee();
employee1.setFirstName("Hoang");
employee1.setLastName("Hung");
employee1.setPosition("Programmer");

document.write(employee1.getFullName());
















