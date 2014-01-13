var i = 0;
var username;
do {
	var username = "Please enter you name. Type exit to exit";
	document.write(username+". You have run this "+ ++i +" time.");
} while(username !== "exit");