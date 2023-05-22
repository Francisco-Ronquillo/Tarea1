//Determinar la solucion lógica de la siguiente operación
//Entrada a(leer),b(leer),resul(calcular)
//Proceso resul<- ((3+5*8)<3 y ((-6/3*4)+2<2)) o(a>b)
//Salida resul

const Leer= require('prompt-sync')()
const Escribir=console

class operacionArit2{
    operacionARITMETICA(){
        let a,b,resul
        a=0;b=0
        
        a=Leer("Digite el valor de a: ")
        b=Leer("Digite el valor de b: ")

        resul=((3+5*8)<3 &&((-6/3*4)+2<2))||(a>b)
        Escribir.log("El resultado es:",resul)
    }
}
let ope=new operacionArit2()
ope.operacionARITMETICA()