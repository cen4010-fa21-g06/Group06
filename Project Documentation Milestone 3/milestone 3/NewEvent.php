<!DOCTYPE html>
<html lang="en">
    <link rel="stylesheet" href="project1.css">
<head>
	<title>New Event</title>
</head>
<body>
	<center>
		<h1>Please insert your Event</h1>
		<form action="insert.php" method="post">
			
<p>
			<label for="Title">Title:</label>
			<input type="text" name="title" id="title">
			</p>

			
<p>
			<label for="time">Time:</label>
			<input type="datetime-local" name="time" id="time">
			</p>

			
<p>
			<label for="description">Description:</label>
			<input type="text" name="Descr" id="description">
			</p>

			
<p>
			<label for="Address">Address:</label>
			<input type="text" name="address" id="Address">
			</p>


			<input type="submit" value="Submit">
		</form>
	</center>
</body>
</html>
