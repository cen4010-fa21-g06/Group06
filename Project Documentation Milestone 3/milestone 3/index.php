<?php


 $db = mysqli_connect('localhost','root','','event') or die('Error connecting to MySQL server.');
?>


<!DOCTYPE html>
<html>
    <link rel="stylesheet" href="project1.css">
    <head>
        <title>RememberAll</title>
        <link rel="stylesheet" href="group.css">
    </head>
    <body>
        <h1 style="text-align: center">RememberAll</h1>
        <div id="wrapper">
            <div>
                <center>
                    <h3>This are your Events</h3>
            <?php


                    $query = "SELECT * FROM event";
                    mysqli_query($db, $query) or die('Error querying database.');
                    $result = mysqli_query($db, $query);
                        echo "<table>";

                    while ($row = mysqli_fetch_array($result)) {
                            echo "<tr><td>". $row['Title'] ."</td><td>". $row['Time'] ."</td><td>". $row['Description'] ."</td><td>". $row['Location'] ."</td></tr>" ;
                            }




    // Close the table
    echo "</table>";


                mysqli_close($db);
                ?>
                    <br>
                    <br>
                    <div><button onclick="window.location.href='http://localhost/milestone%203/NewEvent.php';">Add event</button></div>
        <div><p>If you want to look for an specific event click the search button!!!</p><br>
                    <form action="search.php" method="post">

			<label for="time">Time:</label>
			<input type="datetime-local" name="time" id="time">
			</p>
			<input type="submit" value="Submit">
		</form>
                    </div>
                </center>
            </div>
            </div>
    </body>
</html>