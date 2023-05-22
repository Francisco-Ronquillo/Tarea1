//Una frutería ofrece las manzanas con descuento segun los quilos 
//Entrada precioK(leer),kilos(leer),precioI(calcular),descuento(calcular),precio_final(calcular)
//Precio precioI=preciok*kilos
//        if (kilos>=0 && kilos<=2 ){
//           descuento=0
//        
//        }else{
//            if(kilos>=2.01 && kilos<=10){
//                descuento=precioI*0.10
//            }else{
//                if(kilos>=5.01 && kilos<=10){
//                    descuento=precioI*0.10
//                }else{
//                    descuento=precioI*0.2
//                }
//            }
//
//        }
//     precio_final=precioI-descuento
//Salida precio_final

const Leer= require('prompt-sync')()
const Escribir =console

class descuentoKilos{
    Descuentoskilos(){
        let preciok,kilos,precioI,descuento, precio_final
        preciok=0;precio_final=0;descuento=0;precioI=0;kilos=0

        preciok=Leer("Cuanto cuesta el kilo de manzanas : ")
        kilos=Leer("Cuantos kilos de manzanas a comprado: ")

        precioI=preciok*kilos
        if (kilos>=0 && kilos<=2 ){
            descuento=0
        
        }else{
            if(kilos>=2.01 && kilos<=10){
                descuento=precioI*0.10
            }else{
                if(kilos>=5.01 && kilos<=10){
                    descuento=precioI*0.10
                }else{
                    descuento=precioI*0.2
                }
            }

        }
        precio_final=precioI-descuento
        Escribir.log("El precio a pagar es:$",precio_final)

       

    }
}
let des=new descuentoKilos()
des.Descuentoskilos()