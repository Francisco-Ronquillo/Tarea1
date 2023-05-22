// diagramde flujo
//Entrada a,b,c(leer),resul(calcular)
//Proceso resul=a+b+c
//Salida resul

const Leer= require('prompt-sync')()
const Escribir = console
class diagramFlujo{
    diagramaflujo(){
       let a,b,c,resul
        a=10;b=20;c=0;resul=0

        c=Leer("Digite un numero ")
        resul=a+b+c
        Escribir.log("El resultado es:",resul)


    }

  
}
let diagramaflu=new diagramFlujo()
diagramaflu.diagramaflujo()