//Probamos el diagram N-S
//Entrada a(leer),b(leer),resul(calcular)
//Proceso resul=a+b
//Salida resul

const Leer= require('prompt-sync')()
const Escribir = console
class diagramNs{
    diagramns(){
       let a,b,resul
        a=10;b=0;resul=0

        b=parseInt(Leer("Digite un numero "))
        resul=a+b
        Escribir.log("El resultado es:",resul)


    }

  
}
let diagramans=new diagramNs()
diagramans.diagramns()