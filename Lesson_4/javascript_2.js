// Switch Case Statement
var weather = prompt("What is it like outside?");

switch (weather) {
	case "sunny":
		document.write("It's sunny outside! Go out and play");
		break;
	case "rainy":
		document.write("It's rainy outside! Stay inside!");
		break;
	case "cloudy":
		document.write("It's cloudy outside! Stay in or go out.");
		break;
	case "windy":
		document.write("It's windy outside! Carry a jacket");
		break;
	case "cold":
		document.write("It's cold outside! Don't forget a coat!");
		break;
	default:
		document.write("I don't know what type of weather");
		break;
}