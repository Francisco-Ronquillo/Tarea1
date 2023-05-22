//Elaborar un programa que me muestre el significa de aniversario de cada decada hasta los 60
//Entrada decada(leer) 
//Proceso switch(decada){
//    case 10:
//        Escribir.log("Bodas de hojalata")
//        break;
//    case 20:
//        Escribir.log("Bodas de hojalata")
//        break;
//    case 30:
//        Escribir.log("Bodas de hojalata")
//        break;
//    case 40:
//        Escribir.log("Bodas de hojalata")
//        break;
//    case 50:
//        Escribir.log("Bodas de hojalata")
//        break;
//    case 60:
//        Escribir.log("Bodas de hojalata")
//        break;
//    default:
//      Escribir.log("Decada no existente")
//       break;
//Salida sale la boda dependiendo del numero digitado


const Leer= require('prompt-sync')()
const Escribir = console

class signifiacadoAniversario{
    significadoANIVERSARIO(){
        let decada
        decada=0
        decada=parseInt(Leer("Digite una decada: "))
        switch(decada){
            case 10:
                Escribir.log("Bodas de hojalata")
                break;
            case 20:
                Escribir.log("Bodas de hojalata")
                break;
            case 30:
                Escribir.log("Bodas de hojalata")
                break;
            case 40:
                Escribir.log("Bodas de hojalata")
                break;
            case 50:
                Escribir.log("Bodas de hojalata")
                break;
            case 60:
                Escribir.log("Bodas de hojalata")
                break;
            default:
               Escribir.log("Decada no existente")
               break;

                                        

        }
    }
}
let sig=new signifiacadoAniversario()
sig.significadoANIVERSARIO()