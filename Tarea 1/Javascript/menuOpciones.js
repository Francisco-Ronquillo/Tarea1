//Hacer un programa que tenga un menu
//Entrada opc(leer)
//Proceso switch(opc){
//    case 1:
//        let num=parseFloat(Leer("Digite un numero: "))
//        let pot=parseFloat(Leer("Digite la potencia: "))
//        let resul=Math.pow(num,pot)
//        Escribir.log("El resultado es:", resul)
//        break;
//    case 2:
//        let num2=parseFloat(Leer("Digite un numero: "))
//       let resul2=Math.sqrt(num2)
//        Escribir.log("El resultado es:",resul2)
//        break;
//    case 3:
//        Escribir.log("Saliendo del programa..")
//        break;
//    default:
//        Escribir.log("Se equivoco en la opcion del menu.")
//}
//Salida resul

const Leer= require('prompt-sync')()
const Escribir = console

class menuOpciones{
    menuOPCIONES(){
        Escribir.log("Menu")
        Escribir.log("1.Elevar un numero a un potancia x") 
        Escribir.log("2.Sacar la raíz cuadrada de un numero")
        Escribir.log("3.Salir")  
        
        let opc=parseInt(Leer("Digite una opcion: "))
         
        
        switch(opc){
            case 1:
                let num=parseFloat(Leer("Digite un numero: "))
                let pot=parseFloat(Leer("Digite la potencia: "))
                let resul=Math.pow(num,pot)
                Escribir.log("El resultado es:", resul)
                break;
            case 2:
                let num2=parseFloat(Leer("Digite un numero: "))
                let resul2=Math.sqrt(num2)
                Escribir.log("El resultado es:",resul2)
                break;
            case 3:
                Escribir.log("Saliendo del programa..")
                break;
            default:
                Escribir.log("Se equivoco en la opcion del menu.")
        }


    }
}
let men=new menuOpciones()
men.menuOPCIONES()