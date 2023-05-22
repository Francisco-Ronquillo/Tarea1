//Leer 2 numeros;si son iguales se los multiplique, si el primero es mayor se restan y si no que se sumen
//Entrada num1(leer),num2(leer),resultado(calcular)
//Proceso if(num1>num2){
//         resultado= num1-num2;
//         Escribir.log("El resulatado es:",resultado)
//         
//        }else{
//            if (num1<num2){
//                resultado=num1+num2
//                Escribir.log("El resultado es:",resultado)
//            }else{
//                resultado=num1*num2
//                Escribir.log("El resultado es:",resultado)
//            }
//            
//        } 
//Salida resultado 

const Leer= require('prompt-sync')()
const Escribir = console

class numeroOper{
    numerOPER(){
        let num1,num2,resultado 
        num1=0;num2=0;resultado=0
        num1 =parseInt(Leer("digite el primer numero: "))
        num2 =parseInt(Leer("digite el segundo numero: "))
        
        
        if(num1>num2){
         resultado= num1-num2;
         Escribir.log("El resulatado es:",resultado)
         
        }else{
            if (num1<num2){
                resultado=num1+num2
                Escribir.log("El resultado es:",resultado)
            }else{
                resultado=num1*num2
                Escribir.log("El resultado es:",resultado)
            }
            
        }    
            
    }
    
}
let num= new numeroOper()
num.numerOPER()