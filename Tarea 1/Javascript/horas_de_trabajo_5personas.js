//Dada las horas trabajadas de 5 personas y la tarifa de pago
//Calcular el salario y la sumatoria de todos los salarios
//Entrada i,salario_unitario,horas,tarifa,sumatoria_salario,num_trabajadores
//Proceso while (i<=num_trabajadores) {
//		    horas=parseInt(Leer(i+".digite el valor de horas trabajadas por este trabajador:"));
//		
//		    salario_cada = horas*tarifa
//		    Escribir.log("el valor a pagar de este trabajador es: ",salario_cada)
//		    i = i+1
//		    sumatoria_salario = sumatoria_salario+salario_cada
//	    }
//	    Escribir.log(" el valor total de salarios a pagar es de: ",sumatoria_salario)
//Salida salario_unitario,sumatoria_salario


const Leer= require('prompt-sync')()
const Escribir = console

class horasdetrab5per{
    horasdeTRAB(){
        let i  
	    let salario_cada,horas,tarifa,sumatoria_salario,num_trabajadores 
	    i = 1
	    sumatoria_salario = 0
	    num_trabajadores=parseInt(Leer ("digite el numero de trabajores: "))
	
	    tarifa=parseFloat(Leer("digite la tarifa: "))

	    while (i<=num_trabajadores) {
		    horas=parseInt(Leer(i+".digite el valor de horas trabajadas por este trabajador:"));
		
		    salario_cada = horas*tarifa
		    Escribir.log("el valor a pagar de este trabajador es: ",salario_cada)
		    i = i+1
		    sumatoria_salario = sumatoria_salario+salario_cada
	    }
	    Escribir.log(" el valor total de salarios a pagar es de: ",sumatoria_salario)
    }
}
let hor=new horasdetrab5per()
hor.horasdeTRAB()