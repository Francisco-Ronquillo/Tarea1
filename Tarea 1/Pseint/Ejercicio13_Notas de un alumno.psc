//Un alumno desea saber cuál será su calificación final en la materia de Algotimos.
//dicha calificación se compone de los siguientes porcentajes:
//55% del promedio de sus tres calificaciones parciales
//30% de la calificación del examen FinAlgoritmo
//15% de la calificación de un trabajo FinAlgoritmo
//Entrada parcial1(leer),parcial2(leer),parcial3(leer),examenfinal(calcular),trabfinal(calcular),cali1(calcular),cali2(calcular),cali3(calcular),califinal(calcular) 
//Proceso cali1<-((parcial1+parcial2+parcial3)/3)*55/100;
//        cali2<-examenfinal*30/100
//        cali3<-trabfinal*15/100;
//	      califinal<-cali1+cali2+cali3;
//Salida califinal
Algoritmo sin_titulo
	definir parcial1,parcial2,parcial3,examenfinal,trabfinal como real;
	definir cali1,cali2,cali3,califinal como real;
	escribir"digite las calificaciones de los 3 parciales ";
	leer parcial1,parcial2,parcial3;
	cali1<-((parcial1+parcial2+parcial3)/3)*55/100;
	escribir "digite la calificacion del examen final";
	leer examenfinal;
	cali2<-examenfinal*30/100;
	escribir"digite la calificacion del trabajo final";
	leer trabfinal;
	cali3<-trabfinal*15/100;
	califinal<-cali1+cali2+cali3;
	escribir "la calificacion final es de :",califinal," puntos";
	
FinAlgoritmo
