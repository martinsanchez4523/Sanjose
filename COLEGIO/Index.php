<?php
$servername = "localhost";
$username = "root";
$password = "3193620311Juan.";
$dbname = "school";

// Establecer conexión con la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

// Obtener los datos del formulario
$Usuario = $_POST['User'];
$Contraseña = $_POST['Pass'];

// Consultar la base de datos para verificar las credenciales
$sql = "SELECT * FROM login WHERE Usuario='$User' AND Contraseña='$Pass'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Credenciales válidas, inicio de sesión exitoso
    echo "Inicio de sesión exitoso";
} else {
    // Credenciales inválidas, inicio de sesión fallido
    echo "Usuario o contraseña incorrectos";
}

// Cerrar la conexión
$conn->close();
?>
