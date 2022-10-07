/* 
8. Escriba un programa JavaScript en el que el programa tome un número entero
aleatorio entre 1 y 10, luego se le pedirá al usuario que ingrese un número
aproximado. Si la entrada del usuario coincide con el número de conjetura, el
programa mostrará un mensaje "Buen trabajo"; de lo contrario, mostrará un mensaje
"No coincide".
*/
/*
9. Escriba un programa JavaScript para calcular los días que quedan hasta la
próxima Navidad.
*/
/*
10. Escriba un programa JavaScript para calcular la multiplicación y división de dos
números (entrada del usuario).
*/
let mul1 = prompt("Introduce un numero para multiplicar: ");
let mul2 = prompt("Introduce un numero para multiplicar: ");

let div1 = prompt("Introduce un numero para dividir: ");
let div2 = prompt("Introduce un numero para dividir: ");

let multiplicacion = mul1*mul2;
let division =  div1/div2;

document.write("La multiplicacion es: "+multiplicacion+"</br>");
document.write("La division es: "+division+"</br>");

/*
11. Escriba un programa JavaScript para convertir temperaturas desde y hacia
Celsius, Fahrenheit.
[Fórmula: c / 5 = (f-32) / 9 [donde c = temperatura en Celsius yf = temperatura en
Fahrenheit]
Salida esperada :
60 ° C es 140 ° F
45 ° F es 7.222222222222222 ° C
*/
/*
12. Escriba un programa JavaScript para obtener la URL del sitio web (página de
carga).
*/
var URLactual = window.location;
alert(URLactual);
/*
13. Escriba un ejercicio de JavaScript para crear una variable con un nombre
definido por el usuario.
*/
let nombre = prompt("Introduce un nombre: ");
document.write(nombre);
/*
14. Escriba un ejercicio de JavaScript para obtener la extensión de un nombre de
archivo.
*/
let archivo = "Ejemplo.txt";
document.write("El archivo es un: "+ archivo.split(".").pop());
/*
15. Escriba un programa JavaScript para obtener la diferencia entre un número dado
y 13, si el número es mayor que 13 devuelva el doble de la diferencia absoluta.
*/
let x = prompt("Introduce un numero: ");
let  resta = 13 - x  ;
document.write("</br>"+resta+"</br>");  

if(x > 13)
{
    document.write("</br>"+ Math.abs(resta*2)+"</br>");
}
/*
16. Escriba un programa JavaScript para calcular la suma de los dos números
enteros dados. Si los dos valores son iguales, devuelve el triple de su suma.
*/
let num1 = prompt("Introduce un numero para sumar: ");
let num2 = prompt("Introduce un numero para sumar: ");

suma = num1 + num2;

if (num1  == num2)
{
    document.write(suma*3+"</br>");
}

/*
17. Escriba un programa JavaScript para calcular la diferencia absoluta entre un
número especificado y 19. Devuelve el triple de su diferencia absoluta si el número
especificado es mayor que 19.
*/
let numEspecificado = prompt("Introduce un numero: ");

if(numEspecificado>19)
{
    document.write("El numero especificado es mayor: "+ Math.abs(numEspecificado-19)*3+"</br>");
}
else
{
    document.write("El numero especificado es menor: "+Math.abs(numEspecificado-19)+"</br>");
}
/*
18. Escriba un programa JavaScript para verificar dos números dados y devolver
verdadero si uno de los números es 50 o si su suma es 50
*/
let numVer1 = prompt("Introduce un numero para verificar: ");
let numVer2 = prompt("Introduce un numero para verificar: ");

suma=numVer1+numVer2;

if(numVer1 = 50)
{
    document.write("Verdadero </br>");
}
else if(numVer2 =  50)
{
    document.write("Verdadero </br>");
}
else if(suma = 50)
{
    document.write("Verdadero </br>");
}
else
{
    document.write("Falso </br>");
}

/*
28. Escriba un programa JavaScript para verificar si dos valores enteros dados están
en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho
rango
*/
numVer1 = prompt("Introduce un numero para verificar: ");
numVer2 = prompt("Introduce un numero para verificar: ");

suma=numVer1+numVer2;

if(numVer1 > 49 & numVer1 < 91)
{
    document.write("Verdadero  </br>");
}
else if(numVer2 > 49 &  numVer2 < 91)
{
    document.write("Verdadero </br>");
}
