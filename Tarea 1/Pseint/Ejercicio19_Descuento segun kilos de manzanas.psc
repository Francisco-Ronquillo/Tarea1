//Una frutería ofrece las manzanas con descuento segun los quilos 
//Entrada precioK(leer),kilos(leer),precioI(calcular),descuento(calcular),precio_final(calcular)
//Proceso precioI <- precioK*kilos
//Si kilo>=0 y kilos<=2 Entonces
//	descuento <- 0
//SiNo
//	Si kilos>=2.01 y kilos<=5 Entonces
//		descuento <- precioI*0.10
//	SiNo
//		Si kilos>=5.01 y kilos<=10 Entonces
//			descuento <- precioI*0.15
//		SiNo
//			descuento <- precioI*0.2
//		FinSi
//	FinSi
//precio_final <- precioI-descuento
//Salida precio_final
FinSi
Algoritmo sin_titulo
	definir precioK,kilos,precioI como reales;
	definir descuento,precio_final como reales;
	Escribir "cuanto cuesta el kilo de manzanas?";
	Leer precioK;
	Escribir "Cuantos kilos de manzanas a comprado ?";
	Leer kilos
	precioI <- precioK*kilos
	Si kilo>=0 y kilos<=2 Entonces
		descuento <- 0
	SiNo
		Si kilos>=2.01 y kilos<=5 Entonces
			descuento <- precioI*0.10
		SiNo
			Si kilos>=5.01 y kilos<=10 Entonces
				descuento <- precioI*0.15
			SiNo
				descuento <- precioI*0.2
			FinSi
		FinSi
	FinSi
	precio_final <- precioI-descuento
	Escribir "el precio a pagar es:$",precio_final;
FinAlgoritmo
