//Leer tres números diferentes e imprimir el número mayor de tres
//Entrada num1(leer),num2(leer),num3(leer)
//Proceso   Si num1>num2 y num1>num3 Entonces
//             Escribir "el mayor es :",num1;
//          SiNo
//	             Si num2>num1 y num2>num3 Entonces
//		              Escribir "el mayor es :",num2;
//	              SiNo
//		               Escribir "el mayor es :",num3;
//	              FinSi
//          FinSi
//Salida sale la variable mayor
Algoritmo sin_titulo
	definir num1,num2,num3 como reales;
	Escribir "digite tres numeros diferentes";
	Leer num1,num2,num3
	Si num1>num2 y num1>num3 Entonces
		Escribir "el mayor es :",num1;
	SiNo
		Si num2>num1 y num2>num3 Entonces
			Escribir "el mayor es :",num2;
		SiNo
			Escribir "el mayor es :",num3;
		FinSi
	FinSi
FinAlgoritmo
