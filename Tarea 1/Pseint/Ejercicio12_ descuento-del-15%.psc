//Una tienda ofrece un descuento del 15% sobre el total de la
//la compra y un cliente desea saber cuánto deberá pagar finalmente
//por su compra
//Entrada precio(leer),descuento(calcular),precio_final(calcular)
//Proceso descuento<-precio*0.15
//        precio_final<-precio-descuent
//Salida precio_final
Algoritmo descuento15
	Definir  precio,descuento,precio_final como reales;
	Escribir "Digite el precio a pagar:";
	Leer precio;
	descuento<-precio*0.15
	precio_final<-precio-descuento;
	Escribir " El precio a pagar es de :",precio_final;
FinAlgoritmo
