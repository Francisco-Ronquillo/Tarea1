//En un almacen se hace un 20% de descuento a los clientes cuya compra supere los $100
//Entrada compra(leer),descuento(calcular),preciofinal(calcular)
//Proceso  if(compra>100){
//           descuento=compra*0.2
//        }else{
//           descuento=0
//        }
//        preciofinal=compra-descuento
//         Escribir.log("El precio a pagar es:",preciofinal)
//Salida preciofinal

const Leer= require('prompt-sync')()
const Escribir = console

class descuentoCompra100{
    descuentoCOMPRA100(){
        let compra, descuento, preciofinal
        compra=0;descuento=0;preciofinal=0

        compra=parseFloat(Leer("Digite la cantidad a pagar:"))

        if(compra>100){
            descuento=compra*0.2
        }else{
            descuento=0
        }
        preciofinal=compra-descuento
        Escribir.log("El precio a pagar es:",preciofinal)

    }
}
let des=new descuentoCompra100()
des.descuentoCOMPRA100()