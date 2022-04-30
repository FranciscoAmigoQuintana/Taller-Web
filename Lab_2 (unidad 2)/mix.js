// Imprime un texto
function imprimir() 
{
    // solicita un nombre.
    let nombre = prompt("Instrodusca su nombre");
    alert("Hola "+ nombre);
}

// Funcion que pide numeros, los suma y devuelve
function sumar()
{
    //Ingresa los numeros como string y los transforma en numeros con valor numerico
    var numero1 = parseInt(prompt("Instrodusca primer numero"));
    var numero2 = parseInt(prompt("Instrodusca segundo numero"));
    alert("Resultado: "+ (numero1 + numero2));
}

// Funcion que determina cual numero es mayor entre 2
function mayores()
{
    //Ingresa los numeros como string y los transforma en numeros con valor numerico
    var numero1 = parseInt(prompt("Instrodusca un numero"));
    var numero2 = parseInt(prompt("Instrodusca otro numero"));

    //Verifica cual es el mayor de los 2
    if (numero1>=numero2)
    {
        alert("El mayor es: "+ numero1);
    }
    else 
    {
        alert("El mayor es: "+ numero2);
    }
}

// Funcion que determina cual numero es mayor entre 3
function mayores_serie()
{
    //Ingresa los numeros como string y los transforma en numeros con valor numerico
    var numero1 = parseInt(prompt("Instrodusca un primer numero"));
    var numero2 = parseInt(prompt("Instrodusca un segundo numero"));
    var numero3 = parseInt(prompt("Instrodusca un tercer numero"));

    //Comprobaciones de los 3 casos del mayor, y el caso en que sean iguales los 3
    if ((numero1>numero2)&&(numero1>numero3))
    {
        alert("El mayor es: "+ numero1);
    }
    if ((numero2>numero1)&&(numero2>numero3))
    {
        alert("El mayor es: "+ numero2);
    }
    if ((numero3>numero1)&&(numero3>numero2))
    {
        alert("El mayor es: "+ numero3);
    }
    if ((numero1==numero2)&&(numero2==numero3))
    {
        alert("Los tres son: "+ numero1 + " no hay mayor");
    }
}

// Funcion que determina si el numero es divisible por 2
function divisible()
{
    //Ingresa el numero como string y lo transforma en un valor numerico
    var numero1 = parseInt(prompt("Instrodusca un numero"));

    //Comprueba si el numero es divisible en 2
    if (numero1%2==0)
    {
        alert("El numero: "+ numero1 +" es divisible en 2");
    }
    else 
    {
        alert("El numero: "+ numero1 +" no es divisible en 2");
    }
}

// Funcion que busca la cantidad de letras a
function buscar_a() 
{
    //Ingresa la frase como string y se transforma en char
    var frase = prompt("Ingrese la frase");

    // Con la funcion match se detectan las letras a de la frase y con la funcion length 
    // se cuenta la cantidad de letras a totales en la frase
    var contar = frase.match(/a/g);
    if (contar==null)
    {
        alert ("No hay letras a en la frase");
    }
    else
    {
        var contar = contar.length;
        alert ("La cantidad de a en la frase son: "+contar);
    }
}

// Funcion que busca que vocales hay en la frase
function buscar_vocales() 
{
    //Ingresa la frase como string
    var frase = prompt("Ingrese la frase");

    // Con la funcion match se detectan (coincidencias) las vocales de cada tipo de la frase y con la funcion length 
    // se cuenta la cantidad de vocales de cada tipo en la frase
    var contara = frase.match(/a/g);
    var contare = frase.match(/e/g);
    var contari = frase.match(/i/g);
    var contaro = frase.match(/o/g);
    var contaru = frase.match(/u/g);
    
    //Comprobaciones de cada vocal posible
    if (contara!=null)
    {
        alert("Se encontraron vocales a");
    }
    if (contare!=null)
    {
        alert("Se encontraron vocales e");
    }
    if (contari!=null)
    {
        alert("Se encontraron vocales i");
    }
    if (contaro!=null)
    {
        alert("Se encontraron vocales o");
    }
    if (contaru!=null)
    {
        alert("Se encontraron vocales u");
    }
    if (contara==null && contare==null && contari==null && contaro==null && contaru==null)
    {
        alert("No hay vocales");
    }
}

// Funcion que cuenta el total de cada tipo de vocal hay en la frase
function cantidad_vocales ()
{
    //Ingresa la frase como string
    var frase = prompt("Ingrese la frase");

    // Con la funcion match se detectan (coincidencias) las vocales de cada tipo de la frase y con la funcion length 
    // se cuenta la cantidad de vocales de cada tipo en la frase
    var contara = frase.match(/a/g);
    var contare = frase.match(/e/g);
    var contari = frase.match(/i/g);
    var contaro = frase.match(/o/g);
    var contaru = frase.match(/u/g);
    
    //Comprobaciones de cada vocal posible y cantidad total de cada una
    if (contara!=null)
    {
        var contara = contara.length;
        alert("Se encontraron "+ contara +" vocales a");
    }
    if (contare!=null)
    {
        var contare = contare.length;
        alert("Se encontraron "+ contare +" vocales e");
    }
    if (contari!=null)
    {
        var contari = contari.length;
        alert("Se encontraron "+ contari +" vocales i");
    }
    if (contaro!=null)
    {
        var contaro = contaro.length;
        alert("Se encontraron "+ contaro +" vocales o");
    }
    if (contaru!=null)
    {
        var contaru = contaru.length;
        alert("Se encontraron "+ contaru +" vocales u");
    }
    if (contara==null && contare==null && contari==null && contaro==null && contaru==null)
    {
        alert("No hay vocales");
    }
}

// Funcion que realiza el cambio de moneda
function cambio_moneda()
{
    // Valores de dolar y peso chileno
    var valor = parseInt(document.getElementById("monto").value);
    var resultado = 0;
    var precio_dolar = 852.51;
    var precio_peso = 0.0012;

    // Convierte en dolares el monto en peso chileno
    if (document.getElementById("segundo").checked)
    {
        resultado = valor*precio_peso;
        alert("Su monto en dolares es de: "+ resultado);
    }
    // Convierte en pesos chilenos el monto en dolares
    else if (document.getElementById("primero").checked)
    {
        resultado = valor*precio_dolar;
        alert("Su monto en pesos es de: "+ resultado);
    }
    else 
    {
        alert("Ingrese valores correctos");
    }
}

function dado()
{
    // Arreglo con las direciones de las imagenes de los dados
    var arreglo_dado = new Array("Imagenes/Dados/cara1.png","Imagenes/Dados/cara2.jpg", "Imagenes/Dados/cara3.jpg", "Imagenes/Dados/cara4.png", "Imagenes/Dados/cara5.png", "Imagenes/Dados/cara6.jpg");

    // Calcula los numeros random para las caras de los dados, del 1 al 6
    var x = Math.floor(Math.random() * ((5+1) - 0) + 0);;
    // Comprobacion del numero random y la creacion de la imagen, por el arreglo, se decrecieron en 1, para que correspondieran
    if (x==0)
    {
        document.getElementById("foto_dado").src = arreglo_dado[x];
    }
    else if (x==1)
    {
        document.getElementById("foto_dado").src = arreglo_dado[x];
    }
    else if (x==2)
    {
        document.getElementById("foto_dado").src = arreglo_dado[x];
    }
    else if (x==3)
    {
        document.getElementById("foto_dado").src = arreglo_dado[x];
    }
    else if (x==4)
    {
        document.getElementById("foto_dado").src = arreglo_dado[x];
    }
    else if (x==5)
    {
        document.getElementById("foto_dado").src = arreglo_dado[x];
    }
}

// Arreglo con las direcciones de las imagenes
var arreglo = new Array("Imagenes/Visor/imagen1.jpg","Imagenes/Visor/imagen2.jpg", "Imagenes/Visor/imagen3.jpg", "Imagenes/Visor/imagen4.jpg", "Imagenes/Visor/imagen5.jpg");

// Variable que nos servira de referencia para mostar imagenes
var verificador = 1;

// Funcion que crea el visor de imagenes
function subir()
{
    // Verifica que no se este buscando un valor menor a 1
    if (verificador < 4)
    {
        verificador = verificador+1;
        document.getElementById("foto").src = arreglo[verificador];
    }
}

function bajar()
{
     // Verifica que no se este buscando un valor mayor a 5
     if (verificador > 0)
     {
         verificador = verificador-1;
         document.getElementById("foto").src = arreglo[verificador];
     }
}
