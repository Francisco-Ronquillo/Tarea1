//Leer 10 numeros e imprimir cuantos son positivos, cuantos negativos y cuantos neutros
//Entrada num(leer),i,conteo_positivos(calcular),conteo_negativos(calcular),conteo_neutro(calcular)
//Proceso or(i=1;i<=10;i++){
//    num=parseInt(Leer(i+" Digite un numero "))
//
//    if(num===0){
//        conteo_neutro++;
//    }else{
//        if(num>0){
//            conteo_positivos++;
//
//        }else{
//            conteo_negativos++;
//        }
//    }
//}
//Salida conteo_positivos,conteo_negativos,conteo_neutro


const Leer= require('prompt-sync')()
const Escribir = console

class conteoPnn{
    conteoPNN(){
        let num,i,conteo_positivos,conteo_negativos,conteo_neutro
        num=0;conteo_positivos=0;conteo_negativos=0;conteo_neutro=0

        for(i=1;i<=10;i++){
            num=parseInt(Leer(i+" Digite un numero "))

            if(num===0){
                conteo_neutro++;
            }else{
                if(num>0){
                    conteo_positivos++;

                }else{
                    conteo_negativos++;
                }
            }
        }
        Escribir.log("La cantidad de positivos es:",conteo_positivos)
        Escribir.log("La cantidad de negativos es:",conteo_negativos)
        Escribir.log("Lacantidad de neutros es:",conteo_neutro)
    }
}
let con=new conteoPnn()
con.conteoPNN()