//Realizar un algoritmo para calcular la calificacion promedio y la calificacion mas baja de todo el grupo
//Entrada calificacion_promedio(calcular),calificacion_baja(calcular),calificacion(leer),suma(calcular),i
//Proceso for (i=1 ;i<= 10; i++<= 1){
//		    calificacion=parseInt(Leer(i+".digite una calificacion: "));
//            suma =suma + calificacion;
//	   
//		    if (calificacion < calificacion_baja) {
//			    calificacion_baja = calificacion;
//		    }
//	    }
//	    calificacion_promedio = suma/10;
//       Escribir.log("la calificacion promedio es: ",calificacion_promedio); 
//	    Escribir.log("la calificacion mas baja es: ",calificacion_baja);
//Salida calificacion_promedio,calificacion_baja

const Leer= require('prompt-sync')()
const Escribir = console


class notPymB{
    notPYMB(){
        let calificacion_promedio,calificacion_baja 
	    let calificacion,suma 
	    let i 
	    suma = 0 
	    calificacion_baja = 99999;
	    for (i=1 ;i<= 10; i++<= 1){
		    calificacion=parseInt(Leer(i+".digite una calificacion: "));
            suma =suma + calificacion;
	   
		    if (calificacion < calificacion_baja) {
			    calificacion_baja = calificacion;
		    }
	    }
	    calificacion_promedio = suma/10;
        Escribir.log("la calificacion promedio es: ",calificacion_promedio); 
	    Escribir.log("la calificacion mas baja es: ",calificacion_baja);
        
    }
}
let not=new notPymB()
not.notPYMB()