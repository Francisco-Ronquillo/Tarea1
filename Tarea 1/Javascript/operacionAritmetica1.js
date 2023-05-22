//tenemos que expresar la formula general
//usamos math.sqrt para poder sacar la raiz
//Entrada a(leer),b(leer),c(leer),,resul(calcular)
//Proceso resul<-(-b+ rc(b^2-4*a*c))/(2*a)
//Salida resul
const Leer= require('prompt-sync')()
const Escribir=console

class operacionArit1{
    operacionARIT1(){
        let a,b,c,resul
        a=0;b=0;c=0;resul=0
        a=Leer("Digite el valor de a: ")
        b=Leer("Digite el valor de b: ")
        c=Leer("Digite el valor de c: ")

        resul=(-b+Math.sqrt(b**2-4*a*c))/(2*a)
        Escribir.log("El resultado es:",resul)


    }

}
let operation =new operacionArit1()
operation.operacionARIT1()