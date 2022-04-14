<!DOCTYPE html>
<html>
    <head>
        <!-- indica el utf-8, para poder mostrar la ñ o los acentos y referencia el archivo de estilos.css -->
        <meta charset="utf-8">
        <LINK REL=StyleSheet HREF="estilos.css" TYPE="text/css">
    </head>
    <body>
        <?php
            //este condicional comprueba que el valor ingresado es valido o no es vacio
            if ((!empty($_POST["valor"])) && (!empty($_POST["color"])) || (is_int($_POST["valor"]))) 
            {
                $N=$_POST["valor"];
                $nombre=$_POST["color"];
            }
            elseif ((!empty($_GET["valor"])) && (!empty($_GET["color"])) || (is_int($_GET["valor"])))
            {
                $N=$_GET["valor"];
                $nombre=$_GET["color"];
            }
            else
            {
                echo "no me venga a molestar, no ingreso bien los valores";
            }
            
            //define la variable para los ciclos
            define ('TAM', $N);
            echo "<h1>Tabla con los elementos pedidos</h1>";
            echo " ";
            echo "<table border=1 style='margin: 0 auto;'>";
            $nuevo=1;

            //crea la tabla de tamaño N*N y agrega el color seleccionado
            for ($x = 1;$x <= TAM; $x++ )
            {
                //si es para la fila la pinta, sino la deja en color blanco
                if ($x%2==0)
                {
                    echo "<tr bgcolor=";
                    echo $nombre;
                    echo ">";
                }
                else 
                {
                    echo "<tr bgcolor=fefdfc>";
                }
                //segundo ciclo que ingresa el valor de la matriz
                for ($y = 1;$y <= TAM; $y++ ) 
                {
                    echo "<td>";
                    echo $nuevo;
                    echo "</td>";
                    $nuevo=$nuevo+1;
                }
                echo "</tr>";
            }
            echo "</table>";
        ?>
    </body>
</html>