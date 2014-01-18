var n = 10;
var total = 0;
for (var i = 0; i < n; i++) {
	if (i % 2 == 0) {
		total += i;
	}
}
document.writeln("Total number odd : "+total);