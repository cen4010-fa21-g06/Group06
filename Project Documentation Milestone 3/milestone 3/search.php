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
                    <h3>Search  by Date</h3>
            <?php

		$time = $_REQUEST['time'];
		$query = "SELECT * FROM event WHERE Time = '$time'";
		
                    mysqli_query($db, $query) or die('Error querying database.');
                    $result = mysqli_query($db, $query);

                    while ($row = mysqli_fetch_array($result)) {
                            echo $row['Title'] . ' ' . $row['Time'] . ': ' . $row['Description'] . ' ' . $row['Location'] . '<br>';
                            }
                mysqli_close($db);
                ?>
                    <br>
                    <br>
                    <div><button onclick="window.location.href='http://localhost/milestone%203/';">Go back</button></div>
                </center>
            </div>
            </div>
    </body>
</html>