<!DOCTYPE html>
<html>
    <head>
        <!-- indica el utf-8, para poder mostrar la ñ o los acentos y referencia el archivo de estilos.css -->
        <meta charset="utf-8">
        <LINK REL=StyleSheet HREF="estilos.css" TYPE="text/css">
    </head>
    <body>
        <?php

            echo "<h1 class=titulo>Tabla con los nuemeros del 1 al 100</h1>";
            echo "";
            echo"<table border=1>";
            //crea contador que servira para rellenar la matriz
            $contador=1;
            //primer ciclo de la matriz, por defecto el 10, ya que son del 1 al 10 (corre la fila)
            for ($contador1=1; $contador1<=10; $contador1++)
            {
                echo"<tr>";
                //segundo ciclo de la matriz, por defecto el 10, ya que son del 1 al 10 (corre la columna)
                for ($contador2=1; $contador2<=10; $contador2++)
                {
                    echo"<td>";
                    echo $contador;
                    echo"</td>";
                    //suma al contador, asi va creando cada numero
                    $contador=$contador+1;
                }
                echo"</tr>";    
            }
            echo"</table>";
        ?>
    </body>
</html>