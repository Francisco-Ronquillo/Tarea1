//Calcular el factorial de un numero mayor o igual a 0
//Entrada num(leer), factorial(calcular),i
//Procesoif (num < 0){
//		    Escribir.log(" el numero ",num," no se puede calcular ")
//	    }else{
//		    aux=1
//		    fac=1
//		    while (aux<=num) {
//			    fac=fac*aux;
//			    aux=aux+1
//		    }
//		    Escribir.log( " el factorial del numero es ",num," = ",fac);
//		
//	    }
//Salida factorial



const Leer= require('prompt-sync')()
const Escribir = console

class facNum{
    facNUM(){
        let num, fac, aux 
	    num= Leer(" por favor introduzca un numero ");
	
	    if (num < 0){
		    Escribir.log(" el numero ",num," no se puede calcular ")
	    }else{
		    aux=1
		    fac=1
		    while (aux<=num) {
			    fac=fac*aux;
			    aux=aux+1
		    }
		    Escribir.log( " el factorial del numero es ",num," = ",fac);
		
	    }
    }
}
let fac=new facNum()
fac.facNUM()