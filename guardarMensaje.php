<?php
    include("conexion.php");
    $numEmisor = "7731853217";
    $numRemitente = "5581234567";
    $mensaje = $_POST['txtMensaje'];
    $estado = "enviado";

    $sentencia = "INSERT INTO servidor VALUES(
       DEFAULT,
       '$numEmisor',
       '$numRemitente',
        '$mensaje',
        NOW(),
        '$estado'
    )";
    if (mysqli_query($conexion,$sentencia)){
        echo "mensaje enviado";
        header("Location:index.html");
    }else {
        echo "Error";
    }
    mysqli_close(($conexion));


?>
