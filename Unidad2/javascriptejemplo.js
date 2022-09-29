
   
    //Como enseñar en consola
    console.log ("Hola mundo");

    //Como crear una alerta
   // alert("Hola mundo");

    
    //Como nombrar variables
    //Podemos ver que si aun int edad lo ponemos como texto no da error
    //pero si vemos como no hace la suma si no lo con cadena.
    let edad="23", nueva_edad, incremento;
    const nombre="Rosa García";
    incremento=4;
    nueva_edad=edad+incremento;

    console.log(nombre+" dentro de "+incremento +"  años tendrá "+nueva_edad+ " años");

    //Como hacer un vector
    let miVector=[1,2,3,4,5,6,7,8,9,10];

    console.log(miVector);
    console.log(miVector[5]);
    console.log(miVector.length);


    //se utiliza el use stict para que tengas que definir una variable, si no da un error
    //tienes que ponerla arriba del todo del codigo si no puede fallar y no da error
    //"use strict";
    
    pi=3.14;
    funcionPrueba();

    function funcionPrueba(){
      
        piBIS=3.14;
    }

//festivo();

function festivo(){
    let diaSem;
    diaSem=prompt("Introduce el día de la semana ", "");
    if (diaSem === "domingo")
    {
    console.log("Hoy es festivo");
    }
    else {
        if (diaSem === "lunes" || diaSem === "martes" || diaSem === "miercoles" || diaSem === "jueves" || diaSem === "viernes")
     { 
            console.log("Hoy no es domingo, a trabajar!!");
     }else{
                console.log("Error");
                }
               
}     
}

//potencia();
//potencia2();

function potencia(){
    let x=1;
    for (i=2;i<=1000;i*=2){
        console.log("2 elevado a "+x+" es igual a " +i);
        x++;
    }
}

function potencia2(){
    let x=1, i=1000, y=2, potencia=1; 
    while (y<i){
        console.log("2 elevado a "+  x +" es igual a " +potencia );
        potencia = y*=2;
        x++;
    }

}

//breakPrueba();

function breakPrueba(){
let auxclave=true;
let numveces=0;
//Mientras no introduzca la clave y no se pulse Cancelar
while (auxclave !== "anonimo" && auxclave){
 auxclave=prompt("Introduce la clave ","");
 console.log("Error, prueba otra vez ");
 numveces++;
 if (numveces === 3)
 break;
}
if (auxclave=="SuperClave"){
console.log("La clave es correcta");
}else{
console.log("La clave no es correcta correcta");
}
}


multiplos();

function multiplos(){
    for (i=2;i<=50;i++){
        if((i%2)===0){
            continue;  
        }
        console.log(i);
    }
}