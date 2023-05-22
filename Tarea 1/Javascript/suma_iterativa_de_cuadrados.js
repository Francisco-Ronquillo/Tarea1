//Calcular la suma de los n numero
//s=1+4+9+...
//Procesoi = 1
//	    suma = 0
//	    while (i<=n_elementos){
//		    suma = suma + i**2
//		    i = i+1
//	    }
//	    Escribir.log("la suma es: ",suma);
//Salida suma

const Leer= require('prompt-sync')()
const Escribir = console

class sumIdeC{
    sumIDEC(){
        let n_elementos 
	    let i, suma 
	    n_elementos=parseInt(Leer("digite la cantidad de elementos a sumarse: "))
	    i = 1
	    suma = 0
	    while (i<=n_elementos){
		    suma = suma + i**2
		    i = i+1
	    }
	    Escribir.log("la suma es: ",suma); 
    }
}
let sum=new sumIdeC()
sum.sumIDEC()