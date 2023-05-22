//Ingresar n numeros, visualizar la suma de los numeros pares de la lista
//cuantos numeros pares existen y cual es el promedio de los numeros impares
//Entrada n_elem(leer),i,num,suma_pares(calcular),conteo_pares(calcular),suma_impares(calcular),conteo_impares(calcular),promedio_impares(calcular)
//Proceso mientras i<= n_elem Hacer
//escribir i,".digite un numero:";
//leer num;
//si num mod 2=0 Entonces
//	suma_pares<-suma_pares+num;
//	conteo_pares<-conteo_pares+1;
//SiNo
//	suma_impares<-suma_impares+num;
//	conteo_impares<-conteo_impares+1;
//FinSi
//i<-i+1;
//FinMientras
//si conteo_pares = 0 entonces
//	escribir"no se han digitado numeros pares";
//sino
//	Escribir "la suma de los numeros pares es:",suma_pares;
//	escribir"el contador de los numeros pares es:",conteo_pares;
//FinSi
//si conteo_impares=0 Entonces
//	escribir"no se ha digitado numeros impares";
//SiNo
//	promedio_impares<-suma_impares/conteo_impares;
//	escribir"el promedio impares es:",promedio_impares;
//FinSi
//Salida suma_pares,conteo_pares,promedio_impares

Algoritmo sin_titulo
	definir n_elem,i,num como enteros;
	definir suma_pares,conteo_pares como entero;
	definir suma_impares,conteo_impares como enteros;
	definir promedio_impares como real;
	
	escribir"digite la cantidad de elementos a ingresa:";
	leer n_elem;
	
	i<-1;
	suma_pares<-0;
	conteo_pares<-0;
	suma_impares<-0;
	conteo_impares<-0;
	mientras i<= n_elem Hacer
		escribir i,".digite un numero:";
		leer num;
		si num mod 2=0 Entonces
			//el numero es par
			//suma iterativa de pares
			suma_pares<-suma_pares+num;
			//conteo de pares
			conteo_pares<-conteo_pares+1;
		SiNo
			//el numero es impar
			//suma iterativa de impares
			suma_impares<-suma_impares+num;
			//conteo deimpares;
			conteo_impares<-conteo_impares+1;
		FinSi
		i<-i+1;
	FinMientras
	si conteo_pares = 0 entonces
		escribir"no se han digitado numeros pares";
	sino
		Escribir "la suma de los numeros pares es:",suma_pares;
		escribir"el contador de los numeros pares es:",conteo_pares;
	FinSi
	si conteo_impares=0 Entonces
		escribir"no se ha digitado numeros impares";
	SiNo
		promedio_impares<-suma_impares/conteo_impares;
		escribir"el promedio impares es:",promedio_impares;
	FinSi
FinAlgoritmo
