//Ingrese un número entero y reportar si es par o impar
// Usamos mod para el residuo
//Entrada num
//Proceso   si num mod 2=0 Entonces
//            escribir " el numero ",num," es par";
//          SiNo
//	           escribir" el numero ", num," es impar";
//          FinSi
//Salida num

Algoritmo sin_titulo
	definir num como entero;
	escribir "digite un numero:";
	leer num;
	si num mod 2=0 Entonces
		escribir " el numero ",num," es par";
	SiNo
		escribir" el numero ", num," es impar";
	FinSi
FinAlgoritmo
