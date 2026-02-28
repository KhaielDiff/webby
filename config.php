<?php

$localhost = "localhost";
$username = "root";
$password = ""; 
$database = "user_db";

$conn = new mysqli($localhost, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}





?>