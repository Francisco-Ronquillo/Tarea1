//Determinar si un alumno aprueba o reprueba un curso, sabiendo que aprobará si
//su proemdio de tres calificaciones es mayor o igual a 7;reprueba caso contrario
//Entrada nota1,nota2,nota3, promedio
//Proceso  promedio=(nota1+nota2+nota3)/3
//        if(promedio>= 7){
//            Escribir.log("Alumno aprobado con: ", promedio)
//        }else{
//            Escribir.log ("Alumno reprobado con:",promedio)
//        }
//Salida promedio
const Leer= require('prompt-sync')()
const Escribir = console

class alumnoAor{
    alumnoAOR(){
        let nota1,nota2,nota3,promedio
        nota1=0;nota2=0;nota3=0;promedio
        nota1=parseFloat(Leer("degite la nota 1: "))
        nota2=parseFloat(Leer("degite la nota 2: "))
        nota3=parseFloat(Leer("degite la nota 3: "))
        promedio=(nota1+nota2+nota3)/3

        if(promedio>= 7){
            Escribir.log("Alumno aprobado con: ", promedio)
        }else{
            Escribir.log ("Alumno reprobado con:",promedio)
        }


    }
}
let alum=new alumnoAor()
alum.alumnoAOR()