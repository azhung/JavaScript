<?php
	$a = array();
	$a = ["Anna", "Brittany", "Cinderella", "Diana", "Eva", "Fiona", "Gunda", "Hege", "Inga", "Johanna", "Kitty", "Linda", "Nina", "Ophelia", "Petunia", "Amanda", "Raquel"];
	
	$input = $_GET['p'];
	$iLength = strlen($input);
	$hint = "";	
	foreach($a as $name) {
		if (stristr($input, substr($name, 0, $iLength))) {
			if ($hint === "") {
				$hint = $name;
			} else {
				$hint .= ", ".$name;
			}
		}
	}
	echo $hint === "" ? "No data" : $hint;
?>