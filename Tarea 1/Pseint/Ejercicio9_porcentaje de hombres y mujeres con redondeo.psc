//Queremos sacar el procentaje de hombres y que porcenatje de mujeres hay en un grupo de estudiantes
// Usamos  la funcion redon para redondear  el resultado de los porcentajes
//Entrada num_hombres(leer),num_mujeres(leer),porcentajeH(Calcular),porcentajeM(Calcular),total_estudiantes(calcular)
//Proceso total_estudiantes<-num_hombres+num_mujeres
//porcentajeH<-redon (num_hombres/total_estudiantes*100)
//porcentajeM<-redon(num_mujeres/total_estudiantes*100) 
//Salida porcentajeH,porcentajeM

Algoritmo porcentajeHM
	Definir num_hombres, num_mujeres como enteros;
	Definir total_estudiantes como entero;
	Definir porcentajeH,porcentajeM como reales;
	Escribir"Digite el numero de hombres:";
	Leer num_hombres;
	Escribir"Digite el numero de mujeres:";
	Leer num_mujeres;
	total_estudiantes<-num_hombres+num_mujeres
	porcentajeH<-redon (num_hombres/total_estudiantes*100)
	porcentajeM<-redon(num_mujeres/total_estudiantes*100)
	Escribir " El porcentaje de Hombres es:",porcentajeH,"%";
	Escribir "El porcentaje de Mujeres es:",porcentajeM,"%";
FinAlgoritmo
