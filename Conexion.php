<?php

$host = "localhost";
$User = "root";
$pass = "";

$db= "iniciosesion1";

$conexion = mysqli_connect($host, $User, $pass, $db);

if(!$con) {
    echo "Conexion fallida";
}