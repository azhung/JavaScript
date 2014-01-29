<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Lesson 33 | Ajax with database</title>
</head>
<body>
	<h1>Customer Manager</h1>
	<h2>Add new Customer</h2>
	<div id="result"></div>
	<div id="add">
		<form name="newForm" method="post" action="" onsubmit="addCustomer();">
			Company Name : <input type="text" name="company" /><br/>
			Contact Name : <input type="text" name="contact" /><br/>
			Address : <input type="text" name="address" /><br/>
			City : <input type="text" name="city" /><br/>
			Postal Code : <input type="text" name="postal" /><br/>
			Country : <input type="text" name="country" /><br/>
			<input type="submit" name="ok" value="Add New!" /><br/>		
		</form>
	</div>	
	<div id="load"></div>
	<script type="text/javascript">
		loadCustomer();
		// Hàm xmlPin trả về giá trị là xmlHttp
		function xmlPin() {
			var xmlHttp;			
			// Nếu trình duyệt đang sử dụng có hỗ trợ XMLHttpRequest
			if (window.XMLHttpRequest) {
				// Gán xmlHttp = đối tượng XMLHttpRequest
				xmlHttp = new XMLHttpRequest();
			} else {
				// Nếu trình duyệt là các trình duyệt cũ. Gán xmlHttp = đối tượng ActiveXObject
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
							
			return xmlHttp;
		}
		
		
		function addCustomer() {
			var action = "add";			
			
			var theForm = document.newForm;
			var company = theForm.company;
			var contact = theForm.contact;
			var address = theForm.address;
			var city = theForm.city;
			var postal = theForm.postal;
			var country = theForm.country;
			var button = theForm.ok;
			// button.disable = true;
			if (!isEmpty(company.value)) {
				if (!isEmpty(contact.value)) {
					if (!isEmpty(address.value)) {
						if (!isEmpty(city.value)) {
							if (!isEmpty(postal.value)) {
								if (!isEmpty(country.value)) {
									
									// Xử lý add
									
									var xmlHttp = xmlPin();
									
									xmlHttp.onreadystatechange = function() {
										if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
											// Do something here											
											loadCustomer();
										}
									}
									
									xmlHttp.open("POST", "action.php", true);
									xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
									xmlHttp.send("act="+action+"&company="+company.value+"&contact="+contact.value+"&address="+address.value+"&city="+city.value+"&postal="+postal.value+"&country="+country.value);									
									// return;
								} else {
									alert("Country is empty. Please enter again!");
									country.focus();
								}
							} else {
								alert("Postal code is empty. Please enter again!");
								postal.focus();
							}
						} else {
							alert("City is empty. Please enter again!");
							city.focus();
						}
					} else {
						alert("Address is empty. Please enter again!");
						address.focus();
					}
				} else {
					alert("Contact name is empty. Please enter again!");
					contact.focus();
				}
			} else {
				alert("Company is empty. Please enter again!");
				company.focus();
			}						
			event.preventDefault();
		}
		
		function isEmpty(str) {
			return (str === "");
		}
		
		function loadCustomer() {
			var action = "load";
			var xmlHttp = xmlPin();
			// Open bằng phương thức GET với action = load
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					document.getElementById("load").innerHTML = xmlHttp.responseText;
				}
			}	
			xmlHttp.open("POST", "action.php?act="+action, true);
			xmlHttp.send();
		}
		
		function delCustomer(idCustomer) {
			// alert(idCustomer);
			var action = "del";
			var xmlHttp = xmlPin();
			if(confirm("Do you realy want delete record?")) {
				xmlHttp.onreadystatechange = function() {
					if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
						// loadCustomer();
						var nodeDel = document.getElementById("row-"+idCustomer);
						document.removeChild(nodeDel);
						alert(xmlHttp.responseText);
					}				
				}
				xmlHttp.open("GET", "action.php?act="+action+"&id="+idCustomer);
				xmlHttp.send();
			} else {
				alert("You don't delete record!");
			}			
		}
		
		
		// Function edit Record
		function editCustomer(idCustomer) {
		
			var rowId = document.getElementById("row-"+idCustomer);
			// alert(rowId); // Object Table Row Element
			
		}
		
		
	</script>
</body>
</html>