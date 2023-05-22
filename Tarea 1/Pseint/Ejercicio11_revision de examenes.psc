//Algoritmo para calcular 3 cuestionarios para un evaluacion y cuantas horas y cuantos minutos se tardara en revisar todas las evaluaciones
// Usamos la funcion trunc para quedarnos con la parte entera 
//Entrada cantidadA(leer),cantidadB(leer),cantidadC(leer),tiempoA(calcular),tiempoB(calcular),tiempoC(calcular),tiempo_total(calcular),horas,minutos(calcular)
//Proceso tiempoA<-cantidadA*5;
//        tiempoB<-cantidadB*8;
//        tiempoC<-cantidadC*6;
//        tiempo_total<-tiempoA+tiempoB+tiempoC;
//        horas<-trunc(tiempo_total/60);
//        minutos<-tiempo_total mod 60;
//Salida horas,minutos

Algoritmo revisionExamen
	Definir cantidadA,cantidadB,cantidadC como enteros;
	Definir tiempoA,tiempoB,tiempoC como enteros;
	Definir tiempo_total,horas,minutos como reales;
	Escribir"Digite la cantidad de cuestionarios a:";
	Leer cantidadA;
	Escribir"Digite la cantidad de cuestionarios b:";
	Leer cantidadB;
	Escribir"Digite la cantidad de cuestionarios c:";
	Leer cantidadC;
	tiempoA<-cantidadA*5;
	tiempoB<-cantidadB*8;
	tiempoC<-cantidadC*6;
	
	tiempo_total<-tiempoA+tiempoB+tiempoC;
	horas<-trunc(tiempo_total/60);
	minutos<-tiempo_total mod 60;
	
	
	Escribir "Se tardara ",horas," horas y ",minutos," minutos"
FinAlgoritmo