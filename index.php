<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Inicio de sesion</title>
    <link rel="stylesheet" href="CSS/Style.css">
</head>
<body>
    <form action="IniciarSesion.php" method="POST">
        <h1>INICIAR SESION</h1>
        <hr>
    <?php
        if (isset($_GET['error'])) {
        ?>
        <p class="error">
            <?php
            echo $_GET['error']
            ?>

        </p>
    <?php
        }
    ?>
        <hr>
        <i class="fa-solid fa-user"></i> 
        <label>Usuario</label>
        <input type="text" name="Usuario" placeholder="Nombre de usuario">
        

        <i class="fa-solid fa-unlock"></i> 
        <label>Clave</label>
        <input type="text" name="Clave" placeholder="Clave">

        <hr>
        
        <button type="submit">Iniciar Session</button>
        <a href="CrearCuenta.php">Crear Cuenta</a>

    </form>
</body>
</html>