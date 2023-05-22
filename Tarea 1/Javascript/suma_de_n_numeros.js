//Calcular la suma de los "N" primeros numeros
//Procesofor (let i=1 ; i <= N; i++) {
//	suma = suma + i;
//   }
//   Escribir.log("la suma es: ",suma)
//}
//Salida suma

const Leer= require('prompt-sync')()
const Escribir = console


class sumaden{
    sumadeN(){
     let N= Leer("digite la cantidad de numeros a sumarse: ")
	 let suma=0;
	    for (let i=1 ; i <= N; i++) {
		 suma = suma + i;
		
	    }
	    Escribir.log("la suma es: ",suma)
    }
}
let sum=new sumaden()
sum.sumadeN()