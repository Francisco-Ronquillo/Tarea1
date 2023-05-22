//Ingrese un número entero y reportar si es par o impar
// Usamos % para el residuo
//Entrada num(leer)
//Proceso  if(num%2==0){
//            Escribir.log("El numero",num," es par")
//
//         }else{
//               Escribir.log("El numero",num," es impar")
//         }
//Salida num

const Leer= require('prompt-sync')()
const Escribir = console

class numeroPoI{
    numeroPOI(){
        let num
        num=0
        num=parseInt(Leer("Digite un numero: "))

        if(num%2==0){
            Escribir.log("El numero",num," es par")
        

        }else{
            Escribir.log("El numero",num," es impar")
        }
    }
    


}
let nur=new numeroPoI()
nur.numeroPOI()