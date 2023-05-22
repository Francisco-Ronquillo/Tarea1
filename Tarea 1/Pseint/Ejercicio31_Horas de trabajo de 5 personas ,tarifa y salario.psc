//Dada las horas trabajadas de 5 personas y la tarifa de pago
//Calcular el salario y la sumatoria de todos los salarios
//Entrada i,salario_unitario,horas,tarifa,sumatoria_salario,num_trabajadores
//Proceso mientras i<= num_trabajadores Hacer
//escribir i,".digite el valor de horas trabajadas por este trabajador:";
//leer horas;
//salario_unitario<-horas*tarifa;
//escribir "el valor a pagar de este trabajador es:",salario_unitario;
//i<-i+1
//sumatoria_salario<-sumatoria_salario+salario_unitario
//FinMientras
//escribir" el valor total de salarios a pagar es de :",sumatoria_salario;
//Salida salario_unitario,sumatoria_salario
Algoritmo sin_titulo
	definir i como entero;
	definir salario_unitario,horas,tarifa,sumatoria_salario,num_trabajadores como enteros;
	i<-1;
	sumatoria_salario<-0;
	
	escribir"digite el numero de trabajadores:";
	leer num_trabajadores;
	
	escribir"digite la tarifa:";
	leer tarifa;
	
	mientras i<= num_trabajadores Hacer
		escribir i,".digite el valor de horas trabajadas por este trabajador:";
		leer horas;
		salario_unitario<-horas*tarifa;
		
		escribir "el valor a pagar de este trabajador es:",salario_unitario;
		i<-i+1
		sumatoria_salario<-sumatoria_salario+salario_unitario
	FinMientras
	escribir" el valor total de salarios a pagar es de :",sumatoria_salario;
FinAlgoritmo
