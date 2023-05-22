//Un alumno desea saber cuál será su calificación final en la materia de Algotimos.
//dicha calificación se compone de los siguientes porcentajes:
//55% del promedio de sus tres calificaciones parciales
//30% de la calificación del examen FinAlgoritmo
//15% de la calificación de un trabajo FinAlgoritmo
//Entrada parcial1(leer),parcial2(leer),parcial3(leer),notasParcial(calcular),notaExamen(calcular),promedioP(calcular),notaFinalTrabajo(calcular),notaFinal(calcular)
//Proceso  promedioP = (parcial1+parcial2+parcial3)/3
//                     notasParcial = promedioP*0.55
//                     notaExamen = examen_final*0.3
//                     notaFinalTrabajo = notaTrabajo * 0.15
//	                   notaFinal= notasParcial + notaExamen + notaFinalTrabajo
//Salida notaFinal

const Leer= require('prompt-sync')()
const Escribir = console

class notasAlu{
    notasALUMNO(){
        let parcial1, parcial2, parcial3, promedioP, notasParcial ;
	  let examen_final,notaExamen 
	  let notaTrabajo,notaFinalTrabajo 
	  let notaFinal  
	  parcial1= parseFloat(Leer("digite la primera nota: "))
	  parcial2= parseFloat(Leer("digite la segundo nota: "))
	  parcial3= parseFloat(Leer("digite la tercera nota"))
	  promedioP = (parcial1+parcial2+parcial3)/3
	  notasParcial = promedioP*0.55
	  examen_final= parseFloat(Leer("digite la nota del examen final: "))
	  notaExamen = examen_final*0.3
	  notaTrabajo= parseFloat(Leer("digite la nota del trabajo final: "))
	  notaFinalTrabajo = notaTrabajo * 0.15
	  notaFinal= notasParcial + notaExamen + notaFinalTrabajo;
	  Escribir.log("la calificacion final es: ",notaFinal)
    }
}
let not=new notasAlu()
not.notasALUMNO()