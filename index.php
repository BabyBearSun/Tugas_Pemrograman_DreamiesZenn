<?php
echo "Hello Czennies";
echo "<br>";

$nama = "Haechan";
$angka = 06;
$data = ["Haechan", "Jaemin", "Jeno"];

echo "Nama saya $nama";
echo "<br>";
echo "Angka saya $angka";

?>

<form method="POST">
  Nama: <input type="text" name="nama">
  <button type="submit">Kirim</button>
</form>

<?php
if ($_POST) {
  $nama = $_POST['nama'];
  echo "Halo, $nama!";
}
?>