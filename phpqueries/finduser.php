<?php

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'), true);

$email = $input[email];
$phone = $input[phone];

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "angular_test";

$conn = new mysqli($servername, $username, $password, $dbname);
$return_json = array();

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else{
	$rows = array();
	$sql = "SELECT * from USERS WHERE email='".$email."' or phone='".$phone."'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      $rows[] = $row;
    }
  }
	$return_json = json_encode($rows);
	
}

$conn->close();
echo $return_json;
?>