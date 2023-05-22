//Hacer un algoritmo para intercambiar el valor de 2 variables
//usa aux para poder hacer el cambio
//Entrada a(leer),b(leer)
//Proceso aux<-a;a<-b;b<-aux;
Algoritmo intercambiarValor  
	
	Definir  a,b,aux como enteros;
	
	Escribir "Digite el valor de a:";
	Leer a;
	Escribir "Digite el valor de b:";
	Leer b;
	
	aux<-a;
	a<-b;
	b<-aux;
	Escribir "El nuevo valor de a es:",a;
	Escribir "El nuevo valor de b es:",b;
FinAlgoritmo