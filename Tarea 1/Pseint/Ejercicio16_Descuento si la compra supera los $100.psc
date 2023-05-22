//En un almacen se hace un 20% de descuento a los clientes cuya compra supere los $100
//Entrada compra(leer),descuento(calcular),preciofinal(calcular)
//Proceso  Si compra>100 Entonces
//           descuento <- compra*0.2
//        SiNo
//	         descuento <- 0
//        FinSi
//         preciofinal <- compra-descuento
//Salida preciofinal
Algoritmo sin_titulo
	definir compra como real;
	definir descuento,preciofinal como real;
	Escribir "digite la cantidad a pagar:"
	Leer compra
	Si compra>100 Entonces
		descuento <- compra*0.2
	SiNo
		descuento <- 0
	FinSi
	preciofinal <- compra-descuento
	Escribir "el precio a pagar es:",preciofinal;
FinAlgoritmo
