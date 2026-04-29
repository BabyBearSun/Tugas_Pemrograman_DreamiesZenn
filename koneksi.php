<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "db_nct"; // Sesuaikan nama database tadi

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>