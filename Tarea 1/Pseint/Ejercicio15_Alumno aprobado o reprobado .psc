//Determinar si un alumno aprueba o reprueba un curso, sabiendo que aprobará si
//su proemdio de tres calificaciones es mayor o igual a 7;reprueba caso contrario
//Entrada nota1,nota2,nota3, promedio
//Proceso promedio<-(nota1+nota2+nota3)/3;
//        si promedio>=7 Entonces
//	        escribir "alumno aprobado con:",promedio;
//        SiNo
//	        Escribir "alumno reprobado con:",promedio;
//         FinSi
//Promedio
Algoritmo sin_titulo
	definir nota1,nota2,nota3 como reales;
	definir promedio como real;
	escribir "degite las 3 notas";
	leer nota1,nota2,nota3;
	promedio<-(nota1+nota2+nota3)/3;
	si promedio>=7 Entonces
		Escribir "alumno aprobado con:",promedio;
	SiNo
		Escribir "alumno reprobado con:",promedio;
	FinSi
FinAlgoritmo
