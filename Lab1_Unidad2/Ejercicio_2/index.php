<!DOCTYPE html>
<html>
    <head>
        <!-- indica el utf-8, para poder mostrar la ñ o los acentos y referencia el archivo de estilos.css -->
        <meta charset="utf-8">
        <LINK REL=StyleSheet HREF="estilos.css" TYPE="text/css">
    </head>
    <body>
        <?php
            echo "<h1>Tabla de elementos con N en 5</h1>";
            echo "";
            define ('TAM', 5);
            echo "<table border=1>";
            //se inicia una variavle en 1
            $nuevo=1;
            //se ocupan dos ciclos, para la confeccion de la matriz (el primer for corre la columna y el segundo la filas)
            for ($x = 1;$x <= TAM; $x++ ) 
            {
                //se ocupara para pintar la fila, esto lo hace al reconocer un valor par en x y pinta la fila completa
                if ($x%2==0)
                {
                    echo "<tr bgcolor=#bdc3d6>";
                }
                else 
                {
                    echo "<tr>";
                }
                //este se encarga de correr la columna y ingresar los valores
                for ($y = 1;$y <= TAM; $y++ ) 
                {
                    echo "<td>";
                    echo $nuevo;
                    echo "</td>";
                    $nuevo=$nuevo+1;
                }
                echo "</tr>";
            }
            echo "</table>"
        ?>
    </body>
</html>