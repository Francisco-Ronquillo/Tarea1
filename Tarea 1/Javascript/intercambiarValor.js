//Hacer un algoritmo para intercambiar el valor de 2 variables
//usa aux para poder hacer el cambio
//Entrada a(leer),b(leer)
//Proceso aux=a;a=b;b=aux;
//Salida a,b

const Leer= require('prompt-sync')()
const Escribir=console

class intercambiarVAL{
    intercambiarVALOR(){
        let a,b,aux
        a=0;b=0;aux=0

        a=Leer("Digite el valor de a: ")
        b=Leer("Digite el valor de b: ")

        aux=a
        a=b
        b=aux
        Escribir.log("El nuevo valor de a es: ",a, " y el nuevo valor de b es: ",b)

    }
}
let int= new intercambiarVAL()
int.intercambiarVALOR()