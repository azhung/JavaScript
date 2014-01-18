// Đối tượng date trong javascript

// Khởi tạo đối tượng
// var date = new Date(); 
// Lấy năm hiện tại
// document.write(date.getFullYear());
// Lấy tháng hiện tại(Trả về một mảng dạng array{0->11})
// document.write(date.getMonth());
// Lấy ngày hiện tại và trả về một mảng array{0->6}
// document.write(date.getDay());

// Tạo bộ chào hiển thị ngày tháng năm

function getMonth(index) {
	var monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octorber", "November", "December"];
	return monthsList[index];	
}

function getDay(index) {
	var daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return daysList[index];
}

function subText(text, positionA, positionB) {
	return text.substr(positionA, positionB);
}

var date = new Date();

var helloMessage = [
		"Hello",
		prompt("Please enter your name!", "Your name"),
		"To day is",
		date.getDate(),
		subText(getMonth(date.getMonth()), 0, 3),
		date.getFullYear(),
		subText(getDay(date.getDay()), 0, 3)
];

// alert(helloMessage.join(" "));
document.write(helloMessage.join(" "));
