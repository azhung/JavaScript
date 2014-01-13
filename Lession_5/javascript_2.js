var i = 0;
var username = prompt("Please enter your name. Type exit to exit");

while (username != "exit") {
	document.write("Hello, "+username+". You have run this "+ ++i + " time.");
	username = prompt("Please enter your name. Type exit to exit");
}