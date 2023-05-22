//Leer tres números diferentes e imprimir el número mayor de tres
//Entrada num1(leer),num2(leer),num3(leer)
//Proceso  if(num1>num2 && num1>num3){
//            Escribir.log("El mayor es: ",num1)
//
//         }else{
//                if(num2>num1 && num2>num3){
//                   Escribir.log("El mayor es: ",num2)
//
//                }else{
//                      Escribir.log("El mayor es: ",num3)
//         }
//}
//Salida sale la variable mayor

const Leer= require('prompt-sync')()
const Escribir = console

class mayor3Numeros{
    mayor3NUMEROS(){
        let num1,num2,num3
        num1=0;num2=0;num3=0
        num1 =parseInt(Leer("digite el primer numero: "))
        num2 =parseInt(Leer("digite el segundo numero: "))
        num3 =parseInt(Leer("digite el tercer numero: "))

        if(num1>num2 && num1>num3){
            Escribir.log("El mayor es: ",num1)

        }else{
            if(num2>num1 && num2>num3){
                Escribir.log("El mayor es: ",num2)

            }else{
                Escribir.log("El mayor es: ",num3)
            }
        }

    }
}
let may=new mayor3Numeros()
may.mayor3NUMEROS()