//Realizar un algoritmo para calcular la calificacion promedio y la calificacion mas baja de todo el grupo
//Entrada calificacion_promedio(calcular),calificacion_baja(calcular),calificacion(leer),suma(calcular),i
//Proceso	para i<-1 hasta 10 con paso 1 Hacer;
//escribir i,".digite una calificacion:";
//suma<- suma + calificacion;
//si  calificacion<calificacion_baja Entonces
//	calificacion_baja<-calificacion;
//FinSi
// FinPara
//calificacion_promedio<-suma/10
//Salida calificacion_promedio,calificacion_baja
Algoritmo sin_titulo
	definir calificacion_promedio,calificacion_baja como real;
	Definir calificacion como real;
	Definir i como entero;
	suma<-0;
	calificacion_baja<-99999;
	para i<-1 hasta 10 con paso 1 Hacer;
		escribir i,".digite una calificacion:";
		leer calificacion;
		
		//suma iterativa de las calificaciones
		suma<- suma + calificacion;
		//calculamos la menor calificacion 
		si  calificacion<calificacion_baja Entonces
			calificacion_baja<-calificacion;
		FinSi
	FinPara
	calificacion_promedio<-suma/10
	escribir " la calificacion promedio es :",calificacion_promedio;
	escribir "la calificacion mas baja es:",calificacion_baja;
FinAlgoritmo
