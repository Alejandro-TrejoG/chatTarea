<?php 
    // $servidor = "192.168.43.36";
    $servidor = "localhost";
    $usuario = "root";
    // $contraseña ="12345678";
    $contraseña = "atg28092000";
    $baseDatos = "servidor_alejandro";

    $conexion = mysqli_connect($servidor,$usuario,
        $contraseña,$baseDatos) OR DIE ("Error al conectar la Base de Datos".
        mysqli_connect_error());
