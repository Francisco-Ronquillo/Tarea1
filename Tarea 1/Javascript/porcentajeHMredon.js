//Queremos sacar el procentaje de hombres y que porcenatje de mujeres hay en un grupo de estudiantes
// Usamos  la funcion Math.round para redondear el resultado de los porcentajes
//Entrada num_hombres(leer),num_mujeres(leer),porcentajeH(Calcular),porcentajeM(Calcular),total_estudiantes(calcular)
//Proceso total_estudiantes<-num_hombres+num_mujeres
//porcentajeH=(num_hombres/total_estudiantes*100)
//porcentajeM=(num_mujeres/total_estudiantes*100)
//porcentajeH=Math.round(porcentajeH)
// porcentajeM=Math.round(porcentajeM)
//Salida porcentajeH,porcentajeM

const Leer= require('prompt-sync')()
const Escribir=console

class PorcentajeHn{
    porcentajeHM(){
        let num_hombres, num_mujeres, porcentajeH, porcentajeM, total_estudiantes
        num_hombres=0;num_mujeres=0;porcentajeH=0;porcentajeM=0, total_estudiantes=0

        num_hombres=parseInt(Leer("Digite el numero de hombres: "))
        num_mujeres=parseInt(Leer("Digite el numero de mujeres: "))

        total_estudiantes=num_hombres+num_mujeres
	    porcentajeH=(num_hombres/total_estudiantes)*100
	    porcentajeM=(num_mujeres/total_estudiantes)*100
        
        porcentajeH=Math.round(porcentajeH)
        porcentajeM=Math.round(porcentajeM)

       Escribir.log("El porcentaje de hombres es=",porcentajeH,"%", " Y el porcentaje de mujeres es=",porcentajeM,"%")

    }
}
let por=new PorcentajeHn()
por.porcentajeHM()