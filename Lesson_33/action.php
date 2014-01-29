<?php
	define("HOST", "localhost");
	define("USER", "root");
	define("PASS", "");
	define("DB_NAME", "db_ajax");
	
	$conn = mysql_connect(HOST, USER, PASS) or die("Counld not connect to hosting");
	mysql_select_db(DB_NAME, $conn) or die("Counld not select database");
	
	$act = "";
	if (isset($_REQUEST['act'])) {
		$act = $_REQUEST['act'];		
	}
	
	if ($act == "load") {
		$sql = "SELECT * FROM customers";
		$result = mysql_query($sql, $conn);
		$count = mysql_num_rows($result);
		if ($count > 0) { 
			$stt = 1;
		?>
			<table border="1" id="table-result">
				<thead>
					<tr>
						<th>#</th>
						<th>Company Name</th>
						<th>Contact Name</th>
						<th>Address</th>
						<th>City</th>
						<th>Postal Code</th>
						<th>Country</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody id="tbody">
					<?php while($row = mysql_fetch_array($result)) {
						echo "<tr id=row-".$row['id'].">";
							echo "<td>".$stt."</td>";
							echo "<td>".$row['company_name']."</td>";
							echo "<td>".$row['contact_name']."</td>";
							echo "<td>".$row['address']."</td>";
							echo "<td>".$row['city']."</td>";
							echo "<td>".$row['postal_code']."</td>";
							echo "<td>".$row['country']."</td>";
							echo "<td><a href='#' onclick='delCustomer(".$row['id']."); return false;'>DEL</a> | <a href='#' onclick='editCustomer(".$row['id']."); return false;'>EDIT</a></td>";
						echo "</tr>";
						$stt++;
					} ?>
				</tbody>
			</table>			
		<?php } else {
			echo "Data is empty";
		}
	} // END LOAD
	if($act == "add") {
		$company = $_POST["company"];
		$contact = $_POST["contact"];
		$address = $_POST["address"];
		$city = $_POST["city"];
		$postal = $_POST["postal"];
		$country = $_POST["country"];
		
		$sql = "INSERT INTO customers VALUES (null, '$company', '$contact', '$address', '$city', '$postal', '$country')";
		// echo $sql;
		$result = mysql_query($sql, $conn);
		if ($result) {
			echo "Insert new Record Successfuly";
		} else {
			echo "Insert new Record Failed";
		}
	} // END ADD
	if ($act == "del") {
		$id = $_REQUEST["id"];
		$sql_del = "DELETE FROM customers WHERE id = $id";
		$result = mysql_query($sql_del, $conn);
		if ($result) {
			echo "Delete Successfuly";
		} else {
			echo "Delete Failed!";
		}
	}

	
	
	
	
