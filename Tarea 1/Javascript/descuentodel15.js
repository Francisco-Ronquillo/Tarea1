//Una tienda ofrece un descuento del 15% sobre el total de la
//la compra y un cliente desea saber cuánto deberá pagar finalmente
//por su compra
//Entrada precio(leer),descuento(calcular),precio_final(calcular)
//Proceso descuento=precio*0.15
//        precio_final=precio-descuent
//Salida precio_final

const Leer= require('prompt-sync')()
const Escribir=console
class descuento15{
    descuentoDe15(){
     let descuento,precio,precio_final
     descuento=0;precio=0;precio_final=0
     
     precio=Leer("Ingrese el precio:")
     descuento=precio*0.15
     precio_final=precio-descuento; 
     Escribir.log("El precio a pagar es de:",precio_final)
     }
}

let des=new descuento15()
des.descuentoDe15()


