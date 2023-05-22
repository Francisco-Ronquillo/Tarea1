//Diseñamos un seudocodigo basico
//Entrada a(leer),b(leer),resul(calcular)
//Proceso resul=a+b
//Salida resul

const Leer= require('prompt-sync')()
const Escribir = console
class seudocodigo{
    seudoCodigo(){
       let a,b,resul
        a=20;b=0;resul=0

        b=Leer("Digite un numero ")
        resul=a+b
        Escribir.log("El resultado es:",resul)


    }

  
}
let seudoCOdigo=new seudocodigo()
seudoCOdigo.seudoCodigo()