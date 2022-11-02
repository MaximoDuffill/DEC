class Alumno {
    constructor(dni, nombre, apellido) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
    }

}
class AMT {
    constructor(residencias) {
        this.residencias = residencias;
        this.lHabitacion =  [];
    }

    insertarHabitacion(habitacion){
        this.lHabitacion.push(habitacion);
    }

    eliminarHabitacion(n){
        this.lHabitacion.slice(n, 1);
    }

    mostrarHabitacion(){
        for (let i = 0; i < this.lHabitacion.length; i++) {
            console.log(this.lHabitacion[i].numHabitacion +"/n"+
            this.lHabitacion[i].mostrarAlumno());     
        }
    }

}

class habitacion {
    constructor(numHabitacion) {
        this.numHabitacion = numHabitacion;
        this.numAlumnos = 3;
        this.alumnoLista = [];
    }

    insertarAlumno(alumno){
        this.alumnoLista.push(alumno);
    }

    eliminarAlumno(n){
        this.alumnoLista.slice(n, 1);
    }

    mostrarAlumno(){
        console.log("alumnos:");
        for (let i = 0; i < this.alumnoLista.length; i++) {
            console.log(this.alumnoLista[i].nombre);     
        }
    }

}


let residencia = new AMT (1);

let habitacion1 = new habitacion("123");

let alumno1 = new Alumno("23232", "maximo", "duff")
let alumno2 = new Alumno("23232", "maximo", "duff")
let alumno3 = new Alumno("23232", "maximo", "duff")


let habitacion2 = new habitacion("223");

let alumno4 = new Alumno("23232", "Alberto", "duff")
let alumno5 = new Alumno("23232", "alberto", "duff")
let alumno6 = new Alumno("23232", "abeto", "duff")


residencia.insertarHabitacion(habitacion1);
habitacion1.insertarAlumno(alumno1);
habitacion1.insertarAlumno(alumno2);
habitacion1.insertarAlumno(alumno3);


residencia.insertarHabitacion(habitacion2);
habitacion2.insertarAlumno(alumno4);
habitacion2.insertarAlumno(alumno5);
habitacion2.insertarAlumno(alumno6);


residencia.mostrarHabitacion();

habitacion1.mostrarAlumno();
