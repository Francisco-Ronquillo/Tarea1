//Hacer un programa que tenga un menu
//Entrada opc(leer)
//ProcesoSegun opc Hacer
//1:
//	Definir num,pot,resultado Como Real
//	Escribir 'digite un numero'
//	Leer num
//	Escribir 'digite la potencia'
//	Leer pot
//	resultado <- num^pot
//	Escribir 'El resultado es:',resultado
//2:
//	Definir num,resultado Como Real
//	Escribir 'digite un numero'
//	Leer num
//	resultado <- rc(num)
//	Escribir 'El resultado es:',resultado
//De Otro Modo:
//	Escribir 'se equivoco de opcion de menu'
//FinSegun
//Salida resul
Algoritmo sin_titulo
	Definir opc Como Entero
	Escribir 'Menu'
	Escribir '1:Elevar un numero a una potencia x'
	Escribir '2:Sacar la raíz cuadrada de un numero'
	Escribir '3:Salir'
	Escribir 'Digite una opcion'
	Leer opc
	Segun opc Hacer
		1:
			Definir num,pot,resultado Como Real
			Escribir 'digite un numero'
			Leer num
			Escribir 'digite la potencia'
			Leer pot
			resultado <- num^pot
			Escribir 'El resultado es:',resultado
		2:
			Definir num,resultado Como Real
			Escribir 'digite un numero'
			Leer num
			resultado <- rc(num)
			Escribir 'El resultado es:',resultado
		De Otro Modo:
			Escribir 'se equivoco de opcion de menu'
	FinSegun
FinAlgoritmo
