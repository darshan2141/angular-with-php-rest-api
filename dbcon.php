<?php 
$host = "localhost";
$username = "root";
$password = "";
$dbname = "angularapi";

$conn = mysqli_connect($host,$username,$password,$dbname);
if(!$conn){
    die("Connection Faild : ".mysqli_connect_error());
}
