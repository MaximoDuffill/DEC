/*
1. Realizar un programa que muestre su nombre y su edad en una página HTML.
Emplear el comando write del objeto document para imprimir.
Tener en cuenta que si queremos que cada dato quede en una fila  distinta de la página debemos insertar la etiqueta HTML
(salto de linea en HTML)
*/
/*
let nombre = "Maximo", edad = 20;
document.write("Nombre: "+nombre+"<br/>");

document.write("Edad: "+edad);
*/

/*
Ejercicio 2. Confeccionar un programa en JavaScript que defina e inicialice una variable de tipo cadena de caracteres donde almacenemos el
nombre de un empleado y otra variable de tipo entera donde almacenar el sueldo. Imprimir cada variable en una línea distinta en pantalla.
*/
/*
let nombre="Pepe", sueldo=1500;
console.log(nombre);
console.log(sueldo);

document.write("Nombre: "+nombre+"<br/>");

document.write("Sueldo: "+sueldo);
*/

/*
Ejercicio 3. Confeccionar un programa que permita cargar el nombre de un usuario y su mail por teclado. Mostrar posteriormente los datos
en la página HTML.
*/ 
/*
let nombre_usuario, email;

nombre_usuario = prompt("Introduce tu nombre: ", "");
email = prompt("Introduce tu email: ", "");

document.write ("Usuario: "+nombre_usuario+"<br/>");
document.write ("Email: "+email);
*/

/*
Ejercicio 4. Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del mismo (El perímetro de un cuadrado se calcula
multiplicando el valor del lado por cuatro)
*/  
/*
let lado_cuadrado = 5, perimetro;

perimetro = 5 * 4;

document.write("El perimetro del cuadrado es: "+perimetro+"cm");
*/

/*
Ejercicio 5. Escribir un programa en el cual se ingresen cuatro números, calcular e informar la suma de los dos primeros y el producto del
tercero y el cuarto.
*/

/*
let a, b, c ,d, suma = 0, multiplicacion = 0;
alert("Los proximos numeros que vas ha introducir haran dos cosas, 1º sumarse entre el primero y el segundo, 2º multiplicarse entre los dos ultimos introducidos.");

a = prompt("Introduce un numero: ");
b = prompt("Introduce un numero: ");
c = prompt("Introduce un numero: ");
d = prompt("Introduce un numero: ");

a=parseInt(a);
b=parseInt(b);
c=parseInt(c);
d=parseInt(d);

suma = a + b;
multiplicacion = c * d;

document.write("La suma de los numeros "+ a + " y " + b + " es: "+ suma + "<br/>");
document.write("La multiplicacion de los numeros "+ c + " y " + d + " es: "+ multiplicacion);
*/

/*
Ejercicio 6. Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje ‘Promocionado’. 
Tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado a entero podemos hacer:
nota1=prompt(‘Ingrese primer nota:’,”);
nota1=parseInt(nota1);
*/
/*
let x, y, z, suma = 0;

x = prompt("Introduce tu nota de mates: ");
y = prompt("Introduce tu nota de lengua: ");
z = prompt("Introduce tu nota de ciencias: ");

x=parseInt(x);
y=parseInt(y);
z=parseInt(z);

suma = x + y + z;

if (suma >= 7){
    alert("Promocionado!!!");
}
*/

/*
Ejercicio 7 . Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales (tener en cuenta que para ver si dos variables
tienen el mismo valor almacenado debemos utilizar el operador  == )
*/
/*
let clave1, clave2;

clave1 = prompt("Introduce tu clave: ");
clave2 = prompt("Introduce tu clave: ");

if (clave1 == clave2){
    document.write("Son iguales.");
}
*/