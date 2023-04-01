<!DOCTYPE html>
<html>
<link rel="stylesheet" href="project1.css">
<head>
	<title>Insert Page page</title>
</head>

<body>
	<center>
		<?php


		$conn = mysqli_connect("localhost", "root", "", "event");
		
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}
		
		$title = $_REQUEST['title'];
		$time = $_REQUEST['time'];
		$des = $_REQUEST['Descr'];
		$location = $_REQUEST['address'];
		// Performing insert query execution
		// here our table name is college
		$sql = "INSERT INTO event VALUES ('$title',
			'$time','$des','$location')";
		
		if(mysqli_query($conn, $sql)){
			echo "<h3>data stored in a database successfully.</h3>";

			echo nl2br("\n$title\n $time\n "
				. "$des\n $location");
		} else{
			echo "ERROR: Hush! Sorry $sql. "
				. mysqli_error($conn);
		}
		
		// Close connection
		mysqli_close($conn);
		?>
        <br>
        <br>
        <button  onclick="window.location.href='http://localhost/milestone%203';" />Go back!</button>
	</center>
</body>

</html>
