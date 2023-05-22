//Ingresar n numeros, visualizar la suma de los numeros pares de la lista
//cuantos numeros pares existen y cual es el promedio de los numeros impares
//Entrada n_elem(leer),i,num,suma_pares(calcular),conteo_pares(calcular),suma_impares(calcular),conteo_impares(calcular),promedio_impares(calcular)
//Proceso  while (i <= n_elementos){
//	num=parseInt(Leer( i +".digite un numero: "))		
//	if (num % 2 == 0) {
		suma_pares=suma_pares+num;
		conteo_pares++
//	}else{
//		suma_impares=suma_impares+ num;
//		conteo_impares++
//	   	}
//	i = i + 1;
//}
//if (conteo_pares === 0){
//	Escribir.log("no se han digitado numeros pares");
//}else{
//	Escribir.log("la suma de los numeros pares es: ",suma_pares);
//	Escribir.log( "el conteo de los numeros pares es: ",conteo_pares);
//}
//if (conteo_impares === 0){
//	Escribir.log("no se han digitado numeros impares"); 
//}else{
//	promedio_impares = suma_impares/conteo_impares;
//   Escribir.log( "el promedio de impares es: ",promedio_impares);
//}
//Salida suma_pares,conteo_pares,promedio_impares


const Leer= require('prompt-sync')()
const Escribir = console

class sumIyC{
    sumIYC(){
        let n_elementos,i,num 
	    let suma_pares,conteo_pares 
	    let suma_impares,conteo_impares 
	    let promedio_impares 
	    n_elementos= parseInt (Leer("digite la cantidad de elementos a ingresar: "));
	
	    i=1;
	    suma_pares = 0 ;
	    conteo_pares = 0;
	    suma_impares = 0
	    conteo_impares = 0
	    while (i <= n_elementos){
            num=parseInt(Leer( i +".digite un numero: "))
		
		    if (num % 2 == 0) {
			    suma_pares=suma_pares+num;
			    conteo_pares++
		    }else{
		        suma_impares=suma_impares+ num;
			    conteo_impares++
		       
		
	        }
            i = i + 1;
        }
		if (conteo_pares === 0){
		    Escribir.log("no se han digitado numeros pares");
	    }else{
		    Escribir.log("la suma de los numeros pares es: ",suma_pares);
		    Escribir.log( "el conteo de los numeros pares es: ",conteo_pares);
	    }
	    if (conteo_impares === 0){
		    Escribir.log("no se han digitado numeros impares"); 
	    }else{
            promedio_impares = suma_impares/conteo_impares;
	       Escribir.log( "el promedio de impares es: ",promedio_impares);
	    }
    
    }
}
let sum=new sumIyC()
sum.sumIYC()