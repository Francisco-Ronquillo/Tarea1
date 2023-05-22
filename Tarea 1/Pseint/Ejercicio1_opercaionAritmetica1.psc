//tenemos que expresar la formula general
//usamos rc para poder sacar la raiz
//Entrada a(leer),b(leer),c(leer),,resul(calcular)
//Proceso resul<-(-b+ rc(b^2-4*a*c))/(2*a)
//Salida resul
Algoritmo opercaionAritmetica1
	Definir  a,b,c,resul como reales;
	Escribir "Digite el valor de a:";
	Leer a;
	Escribir "Digite el valor de b:";
	Leer b;
	Escribir "Digite el valor de c:";
	Leer c;
	
	resul<-(-b+ rc(b^2-4*a*c))/(2*a);
	
	Escribir "El resultado es:",resul;
FinAlgoritmo
