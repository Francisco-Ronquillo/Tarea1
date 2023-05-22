//Determinar la solucion lógica de la siguiente operación
//Entrada a(leer),b(leer),resul(calcular)
//Proceso resul<- ((3+5*8)<3 y ((-6/3*4)+2<2)) o(a>b)
//Salida resul
Algoritmo opercaionAritmetica2  
	Definir  a,b como reales;
	Definir resul como logico;
	Escribir "Digite el valor de a:";
	Leer a;
	Escribir "Digite el valor de b:";
	Leer b;
	
	resul<- ((3+5*8)<3 y ((-6/3*4)+2<2)) o(a>b);
	
	Escribir "El resultado es:",resul;
FinAlgoritmo