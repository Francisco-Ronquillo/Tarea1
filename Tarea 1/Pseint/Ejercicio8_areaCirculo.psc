//Hacer un programa para ingresar el radio de un circulo y se reporte su área y la longitud de la circunferencia
//Usamos la funcion pi 
//Entrada radio(leer),pi,area(calcular),lon(calcular)
//Proceso area<-pi *radio^2;
//        lon<-2* pi *radio;
//Salida area,lon

Algoritmo areaCirculo
	Definir radio,area,lon como real;
	Escribir"Digite el valor del radio:";
	Leer radio;
	area<-pi *radio^2;
	lon<-2* pi *radio;
	Escribir " El area de la circunferencia es:",area;
	Escribir "La longitud es:",lon;
FinAlgoritmo
