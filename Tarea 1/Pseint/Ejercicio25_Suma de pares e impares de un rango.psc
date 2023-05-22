//Se decea calcular independientemente la suma de los numeros pare e impares comprendidos en 1 y 50
//Entrada i ,suma_pares(calcular),suma_impares(calcular)
//Proceso Para i<-2 Hasta 49 Hacer
//        Si i MOD 2=0 Entonces
//	          suma_pares <- suma_pares+1
//        SiNo
//	          suma_impares <- suma_impares+1
//         FinSi
//       FinPara
//Salida suma_pares,suma_impares

Algoritmo sin_titulo
	Definir suma_pares,suma_impares,i Como Entero
	suma_pares <- 0
	suma_impares <- 0
	Para i<-2 Hasta 49 Hacer
		Si i MOD 2=0 Entonces
			suma_pares <- suma_pares+1
		SiNo
			suma_impares <- suma_impares+1
		FinSi
	FinPara
	Escribir 'la suma de pares es:',suma_pares
	Escribir 'la su,a de impares es :',suma_impares
FinAlgoritmo
