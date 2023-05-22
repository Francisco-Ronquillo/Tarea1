//Calcular la suma de los "N" primeros numeros 
//Entrada N(leer),suma(calcular),i
// Proceso  suma<-0;
//          para i <-1 hasta N con paso 1 Hacer
//	         suma<-suma+i;
//          FinPara
//Salida suma
Algoritmo sin_titulo
	definir N, suma, i Como Entero
	escribir "digite la cantidad de numeros a sumarse:";
	leer N;
	suma<-0;
	para i <-1 hasta N con paso 1 Hacer
		suma<-suma+i;
	FinPara
	escribir " la suma es:",suma;
	
FinAlgoritmo
