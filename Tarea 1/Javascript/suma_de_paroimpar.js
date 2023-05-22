//Se decea calcular independientemente la suma de los numeros pare e impares comprendidos en 1 y 50
//Entrada i ,suma_pares(calcular),suma_impares(calcular)
//for (let i = 2; i <= 49; i++){
//    if (i % 2 === 0) {
//        suma_pares = suma_pares + 1;
//       } else {
//          suma_impares = suma_impares + 1;
//       }
//   }   Escribir.log("la suma de pares es :",suma_pares)
//       Escribir.log("la suma de impares es :",suma_impares)
//Salida suma_pares,suma_impares
const Leer= require('prompt-sync')()
const Escribir = console

class sumadeParoImpar{
    sumadePoI(){
        let suma_pares = 0;
        let suma_impares = 0;

        for (let i = 2; i <= 49; i++){
            if (i % 2 === 0) {
             suma_pares = suma_pares + 1;
            } else {
               suma_impares = suma_impares + 1;
            }
        }   Escribir.log("la suma de pares es :",suma_pares)
            Escribir.log("la suma de impares es :",suma_impares)
    }
     
}
let sum=new sumadeParoImpar()
sum.sumadePoI()