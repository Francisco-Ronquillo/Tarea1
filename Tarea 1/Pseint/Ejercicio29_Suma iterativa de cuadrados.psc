//Calcular la suma de los n numero
//s=1+4+9+...
//Entrada n_elementos(leer),suma(calcular9,i
//Procesoi <- 1
//suma <- 0
//Mientras i<= n_elementos Hacer
//	suma <-suma+i^2
//	i <-i+1
//FinMientras
//Escribir 'la suma es:',suma
//Salida suma
Algoritmo sin_titulo
	Definir n_elementos Como entero;
	Definir i,suma Como enteros ;
	Escribir 'digite la cantidad de elementos a sumarse:'
	Leer n_elementos;
	i <- 1
	suma <- 0
	Mientras i<= n_elementos Hacer
		suma <-suma+i^2
		i <-i+1
	FinMientras
	Escribir 'la suma es:',suma;
FinAlgoritmo
