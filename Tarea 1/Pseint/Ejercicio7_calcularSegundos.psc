//Calcular la cantidad de segundos que estan incluidos en el numero de horas, minutos y segundos ingresados por el usuario.
//Entrada  horas(leer),minutos(leer),seg(leer),horas_seg(calcular),minutos_seg(calcular),total_seg(calcular)
//Proceso horas_seg<-horas*3600, minutos<-minutos*60,total-seg<-horas_seg+minutos_seg+seg
//Salida total_seg
Algoritmo calcularSegundos
	Definir horas,minutos,seg como enteros;
	Definir horas_seg,minutos_seg,total_seg como enteros;
	Escribir "Digite las horas:";
	Leer horas;
	Escribir "Digite los minutos:";
	Leer minutos;
	Escribir "Digite los segundos:";
	Leer seg;
	//Calcular el equivalente en segundos
	horas_seg<-horas*3600
	minutos_seg<-minutos*60;
	total_seg<-horas_seg+minutos_seg+seg
	
	Escribir" Los segundos equivalentes son:",total_seg
FinAlgoritmo