<!DOCTYPE html>
<html>
    <head>
        <!-- indica el utf-8, para poder mostrar la ñ o los acentos y referencia el archivo de estilos.css -->
        <meta charset="utf-8">
        <LINK REL=StyleSheet HREF="estilos.css" TYPE="text/css">
    </head>
    <body>
        <h1 class="titulo">Imagenes de la galeria</h1>
        <p>   </p>
        <table border="1" class="tabla">
            <tr>
            <?php
                //se guarda el nombre del directorio
                $ruta="Fotos/";
                //iniacializa un avariable con la ruta, para reconocer informacion del directorio
                $filenombre = opendir($ruta);
                //contador que sirve para crear las columnas
                $numero=0;

                //ciclo que reviza informacion dentro del directorio, para esto se usar readdir, la guarda como fileimagen
                while ($fileimagen = readdir($filenombre))
                {
                    //reviza que la imgane no este vacia
                    if ($fileimagen !="." && $fileimagen !="..")
                    {   
            ?>          <!-- muestra la imagen dentro de la tabla, para esto esta linea lleva codigo de php y html conjunto -->
                        <td align="center" valign="middle"><img src="<?php echo $ruta.$fileimagen ?>" width="250px"></td>
                        <?php

                            $numero++;
                            //verifica el maximo de columnas que se indico, que era 4, al contar 4 termina la fila y pasa a la siguiente 
                            if ($numero%4 == 0)
                            {
                                echo "</tr>";
                            }
                    }
                }
                //sale del directorio
                closedir($filenombre);
            ?>
            </table>
    </body>
</html>