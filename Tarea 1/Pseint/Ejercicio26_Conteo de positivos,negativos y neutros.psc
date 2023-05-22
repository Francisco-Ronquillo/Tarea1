//Leer 10 numeros e imprimir cuantos son positivos, cuantos negativos y cuantos neutros
//Entrada num(leer),i,conteo_positivos(calcular),conteo_negativos(calcular),conteo_neutro(calcular)
//Proceso Para i<-1 Hasta 10 Hacer
//Escribir i,".digite un numero:";
//Leer num
//Si num=0 Entonces
//	conteo_neutro <- conteo_neutro+1;
//SiNo
//	Si nume>0 Entonces
//		conteo_positivos <- conteo_positivos+1;
//	SiNo
//		conteo_negativos <- conteo_negativos+1;
//	FinSi
//FinSi
//FinPara
//Salida conteo_positivos,conteo_negativos,conteo_neutro
Algoritmo sin_titulo
	definir num,i como entero;
	conteo_positivos <- 0;
	conteo_negativos <- 0;
	conteo_neutro <- 0;
	Para i<-1 Hasta 10 Hacer
		Escribir i,".digite un numero:";
		Leer num
		Si num=0 Entonces
			conteo_neutro <- conteo_neutro+1;
		SiNo
			Si nume>0 Entonces
				conteo_positivos <- conteo_positivos+1;
			SiNo
				conteo_negativos <- conteo_negativos+1;
			FinSi
		FinSi
	FinPara
	Escribir "la cantidad de positivos es:",conteo_positivos;
	Escribir "la cantidad de negativos es:",conteo_negativos;
	Escribir "la cantidad de neutros:",conteo_neutro;
FinAlgoritmo
