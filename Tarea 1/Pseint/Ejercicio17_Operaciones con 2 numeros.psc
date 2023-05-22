//Leer 2 numeros;si son iguales se los multiplique, si el primero es mayor se restan y si no que se sumen
//Entrada num1(leer),num2(leer),resultado(calcular)
//Proceso si num1=num2 entonces
//           resultado<-num1*num2;
//        sino 
//	          si num1>num2
//		          resultado<-num1-num2;
//	          SiNo
//		           resultado<-num1+num2;
//	          FinSi
//        FinSi
//Salida resultado

Algoritmo sin_titulo
	definir num1,num2, resultado como reales;
	escribir "digite dos numeros:";
	leer num1,num2;
	
	si num1=num2 entonces
		resultado<-num1*num2;
	sino 
		si num1>num2
			resultado<-num1-num2;
		SiNo
			resultado<-num1+num2;
		FinSi
	FinSi
	escribir "el resultado es:",resultado;
	
FinAlgoritmo
